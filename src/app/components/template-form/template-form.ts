import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { PRODUCT_OPTIONS, STATUS_OPTIONS, Template, TemplateFormValue } from '../../models/template.model';

export type FormMode = 'add' | 'edit' | 'view';

@Component({
  selector: 'app-template-form',
  imports: [ ReactiveFormsModule, DialogModule, SelectModule, InputTextModule ],
  templateUrl: './template-form.html',
})
export class TemplateForm implements OnChanges {
  @Input() visible = false;
  @Input() mode: FormMode = 'add';
  @Input() template: Template | null = null;

  @Output() save = new EventEmitter<TemplateFormValue>();
  @Output() closed = new EventEmitter<void>();

  products = PRODUCT_OPTIONS;
  statuses = STATUS_OPTIONS;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      project: ['', [Validators.required, Validators.maxLength(80)]],
      customer: ['', [Validators.required, Validators.maxLength(80)]],
      product: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnChanges(): void {
    if (!this.visible) {
      return;
    }
    this.patchForm();
    if (this.mode === 'view') {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  get isView(): boolean {
    return this.mode === 'view';
  }

  get title(): string {
    if (this.mode === 'edit') {
      return 'Upload Template / Edit';
    }
    if (this.mode === 'view') {
      return 'Upload Template / View';
    }
    return 'Upload Template / Add';
  }

  get submitLabel(): string {
    return this.mode === 'edit' ? 'Update' : 'Submit';
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.save.emit(this.form.value as TemplateFormValue);
  }

  reset(): void {
    this.patchForm();
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  close(): void {
    this.closed.emit();
  }

  onVisibleChange(open: boolean): void {
    if (!open) {
      this.closed.emit();
    }
  }

  private patchForm(): void {
    this.form.reset({
      project: this.template?.project ?? '',
      customer: this.template?.customer ?? '',
      product: this.template?.product ?? '',
      status: this.template?.status ?? '',
    });
  }
}
