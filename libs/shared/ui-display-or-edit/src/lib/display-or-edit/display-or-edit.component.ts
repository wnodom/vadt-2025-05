import { NgIf } from '@angular/common';
import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FocusInputDirective } from './focus-input.directive';

@Component({
  selector: 'oasis-display-or-edit',
  templateUrl: 'display-or-edit.component.html',
  styleUrls: ['display-or-edit.component.scss'],
  imports: [
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FocusInputDirective,
    MatButtonModule,
    MatIconModule
  ]
})
export class DisplayOrEditComponent {
  @Input({ required: true }) control!: FormControl;
  @Input({ transform: booleanAttribute }) useTextArea = false;
  @Input({ transform: booleanAttribute }) useDelete = false;
  @Input() actionsPosition: 'before' | 'after' = 'before';

  @Output() updated = new EventEmitter<void>();
  @Output() deleteClicked = new EventEmitter<void>();

  editing = false;

  finishEdit() {
    this.editing = false;
    this.updated.emit();
  }
}
