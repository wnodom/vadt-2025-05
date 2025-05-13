import { Component, Input } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html'
})
export class EmployeeDisplayComponent {
  @Input({ required: true }) employee: Employee | undefined;
}
