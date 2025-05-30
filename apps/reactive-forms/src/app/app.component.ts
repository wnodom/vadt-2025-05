import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ReactiveFormsModule, JsonPipe]
})
export class AppComponent {
  // Consider using NonNullableFormBuilder if you never set or want to
  // reset any of your controls to a `null` value. Learn more about
  // Typed Forms Nullability here:
  // https://angular.dev/guide/forms/typed-forms#nullability

  details = inject(FormBuilder).group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    middleInitial: ['', Validators.maxLength(1)],
    position: ['Sales', Validators.minLength(3)],
    department: [''],
    immediateSupervisor: [''],
    phoneNumber: ['', Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)],
    email: ['', [Validators.email, Validators.required]],
    status: ['Active', Validators.required]
  });

  departments = ['HR', 'Payroll'];

  saveEmployeeDetails(): void {
    console.log('Form Submitted', this.details.value);
  }

  logTheForm(): void {
    console.log('form: ', this.details);
  }
}
