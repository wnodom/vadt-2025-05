import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { Employee, EmployeeLoader } from '../employee-loader.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  imports: [RouterLink, AsyncPipe]
})
export default class EmployeeListComponent {
  list: Observable<Employee[]>;

  constructor() {
    const loader = inject(EmployeeLoader);

    this.list = loader.getList();
  }
}
