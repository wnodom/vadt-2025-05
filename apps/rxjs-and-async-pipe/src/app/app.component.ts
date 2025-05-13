import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { EmployeeLoaderService } from './employee-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [AsyncPipe]
})
export class AppComponent {
  employees = inject(EmployeeLoaderService).loadEmployees();
}
