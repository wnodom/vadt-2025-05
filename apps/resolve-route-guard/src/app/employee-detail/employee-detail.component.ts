import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  imports: [RouterLink, AsyncPipe]
})
export class EmployeeDetailComponent {
  employee = inject(ActivatedRoute).data.pipe(
    // String here has to match the string in the resolve config of your route.
    map(routeData => routeData['employee'])
  );
}
