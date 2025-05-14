import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  stringWithHtml = `
    <button onClick="window.alert('hello from old-school HTML/JS');">
      Press Me
    </button>
    <em>Hello from <strong>HTML</strong></em>
  `;

  // TODO: Do our part to make sure HTML is safe
  htmlProperty = inject(DomSanitizer).bypassSecurityTrustHtml(
    this.stringWithHtml
  );
}
