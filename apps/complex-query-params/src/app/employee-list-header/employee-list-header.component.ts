import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { TableOptions } from '../employees.service';

@Component({
  selector: 'app-employee-list-header',
  templateUrl: './employee-list-header.component.html',
  styleUrl: './employee-list-header.component.scss'
})
export class EmployeeListHeaderComponent {
  @Input({ required: true }) propertyName!: string;
  @Input({ required: true }) display!: string;
  @Input({ required: true }) options: TableOptions | undefined;
  @Output() clicked = new EventEmitter<string>();
}
