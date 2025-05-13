import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, tap } from 'rxjs';

export interface Company {
  id?: string;
  name: string;
  phone: string;
  address: string;
}

const apiUrl = '/api';

// Or connect to the hosted demo API (works from StackBlitz):
// const apiUrl = 'https://api.angularbootcamp.com';

function logWithTimestamp(messageList: unknown[]) {
  console.table(messageList);
  console.log('Messages retrieved at ' + new Date().toISOString());
}

@Injectable({
  providedIn: 'root'
})
export class CompanyLoader {
  private http = inject(HttpClient);

  loadOneCompany() {
    return this.http.get<Company[]>(apiUrl + '/companies').pipe(
      tap(companies => logWithTimestamp(companies)),
      map(companies => companies[0])
    );
  }
}
