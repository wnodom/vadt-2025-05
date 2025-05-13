import { Component, Input, OnDestroy, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  imports: [ReactiveFormsModule]
})
export class EmployeeFilterComponent implements OnDestroy {
  private router = inject(Router);

  @Input({ required: true }) set filterTerm(val: string | undefined) {
    console.log({ val });
    if (val !== undefined) {
      this.filter.setValue(val);
      this.filter.enable();
    } else {
      // disabling the control until term arrives
      // to prevent user input from being thrown away
      this.filter.disable();
    }
  }

  filter = new FormControl();

  private controlSub = this.filter.valueChanges
    .pipe(debounceTime(300), distinctUntilChanged())
    .subscribe(searchTerm => {
      // If filter is an empty string, replace with undefined
      // This avoids having an empty key-value pair in the URL
      const filter = searchTerm || undefined;
      const queryParams = { filter };
      // Navigate returns a promise, best practices dictate that you should always handle them
      // We are intentionally choosing not to so we are casting it to a void to pass lint
      void this.router.navigate([], {
        queryParams,
        queryParamsHandling: 'merge'
      });
    });

  ngOnDestroy() {
    this.controlSub.unsubscribe();
  }
}
