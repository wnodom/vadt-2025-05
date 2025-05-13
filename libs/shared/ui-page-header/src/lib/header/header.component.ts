import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { UrlHandler } from '../types';

@Component({
  selector: 'oasis-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [MatToolbarModule, NgFor, MatButtonModule]
})
export class HeaderComponent {
  @Input({ required: true }) title!: string;
  @Input() documents: UrlHandler[] = [];
}
