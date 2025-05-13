import { AsyncPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, share } from 'rxjs';

import { Employee, EmployeeLoader } from '../employee-loader.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  imports: [RouterLink, AsyncPipe]
})
export default class EmployeeDetailComponent {
  private readonly loader = inject(EmployeeLoader);
  employee: Observable<Employee> | undefined;

  // This replaces
  // route.paramMap.pipe(map(paramMap => paramMap.get('employeeId')));
  @Input() set employeeId(id: string) {
    this.employee = this.loader.getDetails(id).pipe(share());
  }
}
