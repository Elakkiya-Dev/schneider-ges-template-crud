import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { Template, TemplateFormValue } from '../../models/template.model';
import { TemplateService } from '../../services/template.service';
import { FormMode, TemplateForm } from '../template-form/template-form';
import { DeleteConfirm } from '../delete-confirm/delete-confirm';

@Component({
  selector: 'app-template-list',
  imports: [TableModule, TemplateForm, DeleteConfirm],
  templateUrl: './template-list.html',
})
export class TemplateList implements OnInit {
  templates: Template[] = [];

  // Add/Edit/View dialog state
  formVisible = false;
  formMode: FormMode = 'add';
  selectedTemplate: Template | null = null;

  // Delete dialog state
  deleteVisible = false;
  templateToDelete: Template | null = null;

  constructor( private templateService: TemplateService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadTemplates();
  }

  private loadTemplates(): void {
    this.templates = this.templateService.getTemplates();
  }

  get totalCount(): string {
    return String(this.templateService.getCount()).padStart(2, '0');
  }

  openAdd(): void {
    this.selectedTemplate = null;
    this.formMode = 'add';
    this.formVisible = true;
  }

  openView(row: Template): void {
    this.selectedTemplate = row;
    this.formMode = 'view';
    this.formVisible = true;
  }

  openEdit(row: Template): void {
    this.selectedTemplate = row;
    this.formMode = 'edit';
    this.formVisible = true;
  }

  openDelete(row: Template): void {
    this.templateToDelete = row;
    this.deleteVisible = true;
  }

  closeForm(): void {
    this.formVisible = false;
  }

  closeDeleteDialog(): void {
    this.deleteVisible = false;
    this.templateToDelete = null;
  }

  onSave(value: TemplateFormValue): void {
    if (this.formMode === 'edit' && this.selectedTemplate) {
      this.templateService.update(this.selectedTemplate.id, value);
      this.showToast('success', 'Template updated', `"${value.project}" was updated successfully.`);
    } else {
      this.templateService.create(value);
      this.showToast('success', 'Template added', `"${value.project}" was created successfully.`);
    }
    this.loadTemplates();
    this.closeForm();
  }

  onConfirmDelete(): void {
    if (this.templateToDelete) {
      this.showToast('warn', 'Template deleted', `"${this.templateToDelete.project}" was removed.`);
      this.templateService.delete(this.templateToDelete.id);
    }
    this.loadTemplates();
    this.closeDeleteDialog();
  }

  resetData(): void {
    this.templateService.resetToSeed();
    this.loadTemplates();
    this.showToast('success', 'Sample data restored', 'The original 5 templates were restored.');
  }

  statusDotClass(status: string): string {
    switch (status) {
      case 'GES Managed':
        return 'bg-status-green';
      case 'Tested And Validated':
        return 'bg-status-blue';
      default:
        return 'bg-status-amber';
    }
  }

  private showToast(severity: string, summary: string, detail: string): void {
    this.messageService.add({ severity, summary, detail, life: 3000 });
  }
}
