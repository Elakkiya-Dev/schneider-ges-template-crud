import { Injectable } from '@angular/core';
import { Template, TemplateFormValue } from '../models/template.model';

@Injectable({ providedIn: 'root' })
export class TemplateService {
  private readonly storageKey = 'schneider_ges_templates';
  private templates: Template[] = [];

  constructor() {
    this.templates = this.load();
  }

  getTemplates(): Template[] {
    return [...this.templates];
  }

  getCount(): number {
    return this.templates.length;
  }

  create(value: TemplateFormValue): void {
    const newTemplate: Template = { id: this.nextId(), ...value };
    this.templates = [...this.templates, newTemplate];
    this.save();
  }

  update(id: number, value: TemplateFormValue): void {
    this.templates = this.templates.map((t) =>
      t.id === id ? { id, ...value } : t
    );
    this.save();
  }

  delete(id: number): void {
    this.templates = this.templates.filter((t) => t.id !== id);
    this.save();
  }

  resetToSeed(): void {
    this.templates = this.getSeedData();
    this.save();
  }

  private nextId(): number {
    if (this.templates.length === 0) {
      return 1;
    }
    return Math.max(...this.templates.map((t) => t.id)) + 1;
  }

  private load(): Template[] {
    const raw = localStorage.getItem(this.storageKey);
    if (raw) {
      try {
        return JSON.parse(raw) as Template[];
      } catch (error) {
        console.warn('Failed to parse stored templates, falling back to seed data.', error);
      }
    }
    const seed = this.getSeedData();
    localStorage.setItem(this.storageKey, JSON.stringify(seed));
    return seed;
  }

  private save(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.templates));
  }

  private getSeedData(): Template[] {
    return [
      { id: 1, project: 'Hydro-Electric Control', customer: 'Renewable Energy Corp', product: 'Triconex', status: 'GES Managed' },
      { id: 2, project: 'Oil Rig Safety System', customer: 'Global Petrol', product: 'Foxboro DCS', status: 'GES Managed' },
      { id: 3, project: 'Gas Turbine Logic', customer: 'PowerGen Solutions', product: 'Foxboro DCS', status: 'Tested And Validated' },
      { id: 4, project: 'Substation Automation', customer: 'City Grid', product: 'Triconex', status: 'Untested' },
      { id: 5, project: 'Refinery Monitoring', customer: 'Coastal Refining', product: 'Triconex', status: 'GES Managed' },
    ];
  }
}
