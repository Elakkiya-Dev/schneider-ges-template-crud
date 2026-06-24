import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Template } from '../../models/template.model';

@Component({
  selector: 'app-delete-confirm',
  imports: [DialogModule],
  templateUrl: './delete-confirm.html',
})
export class DeleteConfirm {
  @Input() visible = false;
  @Input() template: Template | null = null;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onVisibleChange(open: boolean): void {
    if (!open) {
      this.cancel.emit();
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }

  onConfirm(): void {
    this.confirm.emit();
  }
}
