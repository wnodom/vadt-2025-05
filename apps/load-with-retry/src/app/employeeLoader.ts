import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Employee } from './employee';

const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoader {
  private http = inject(HttpClient);

  getList(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(apiUrl + '/employees')
      .pipe(map(longList => longList.slice(0, 9)));
  }

  getDetails(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(
      `${apiUrl}/employees/${employeeId}`
    );
  }
}
