import { Component } from '@angular/core';

import { SearchBoxComponent } from '../search/search-box.component';

@Component({
  selector: 'app-hr-files-search',
  template: `
    <article>
      <header>HR Functionality</header>
      <p>Search for Employee HR Records</p>
      <app-search-box />
    </article>
  `,
  imports: [SearchBoxComponent]
})
export default class HrFilesSearchComponent {}
