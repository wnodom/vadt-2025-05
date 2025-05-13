import { Component, Input } from '@angular/core';

import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail-view',
  templateUrl: './employee-detail-view.component.html'
})
export class EmployeeDetailComponent {
  @Input({ required: true }) employee: Employee | undefined;
}
