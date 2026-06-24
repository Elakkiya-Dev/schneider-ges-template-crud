export type TemplateStatus = 'GES Managed' | 'Tested And Validated' | 'Untested';

export interface Template {
  id: number;
  project: string;
  customer: string;
  product: string;
  status: TemplateStatus;
}

export interface TemplateFormValue {
  project: string;
  customer: string;
  product: string;
  status: TemplateStatus;
}

export const PRODUCT_OPTIONS: string[] = [
  'Triconex',
  'Foxboro DCS',
  'Modicon M580',
  'EcoStruxure Process Expert',
];

export const STATUS_OPTIONS: TemplateStatus[] = [
  'GES Managed',
  'Tested And Validated',
  'Untested',
];
