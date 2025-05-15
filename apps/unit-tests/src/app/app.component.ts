import { Component, inject } from '@angular/core';

import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  greeting = inject(HelloService).calculateHello('Hello');
}
