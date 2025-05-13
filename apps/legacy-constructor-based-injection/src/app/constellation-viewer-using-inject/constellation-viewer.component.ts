import { AsyncPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ColorSchemeObserver } from '@class-materials/shared/util-color-scheme-observer';

import { LoggerService } from '../logger.service';
import { Constellation } from '../types';

import { ConstellationLoader } from './constellation-loader.service';

function observeColorscheme() {
  return inject(ColorSchemeObserver).observe();
}

@Component({
  selector: 'app-constellation-viewer-using-inject',
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
  styleUrl: '../constellation-viewer-shared-template.component.scss',
  templateUrl:
    '../constellation-viewer-shared-template.component.html'
})
export default class ConstellationViewerComponent {
  @Input() set id(iauAbbreviation: string) {
    if (iauAbbreviation) {
      this.selectConstellation(iauAbbreviation);
    }
  }

  private readonly logger = inject<LoggerService>(LoggerService, {
    optional: true
  });

  private readonly constellationLoader = inject(ConstellationLoader);

  readonly constellations$ =
    this.constellationLoader.getConstellations();

  readonly colorScheme$ = observeColorscheme();

  selectedConstellation$: Observable<Constellation | null> = of(null);
  imageZoomed = false;
  imageLoaded = false;

  selectConstellation(iauAbbreviation: string) {
    this.logger?.log(
      `Loading constellation with IAU abbreviation "${iauAbbreviation}"`
    );

    this.imageLoaded = false;
    this.imageZoomed = false;

    this.selectedConstellation$ = iauAbbreviation
      ? this.constellationLoader.getConstellation(iauAbbreviation)
      : of(null);
  }
}
