import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  @Input({ required: true }) employees!: Employee[];
  @Output() selectedEmployee = new EventEmitter<number>();
}
