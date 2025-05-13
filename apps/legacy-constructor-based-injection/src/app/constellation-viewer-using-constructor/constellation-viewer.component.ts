import { AsyncPipe } from '@angular/common';
import { Component, Input, Optional } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ColorSchemeObserver } from '@class-materials/shared/util-color-scheme-observer';

import { LoggerService } from '../logger.service';
import { Constellation } from '../types';

import { ConstellationLoader } from './constellation-loader.service';

@Component({
  selector: 'app-constellation-viewer-using-constructor',
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

  readonly constellations$;
  selectedConstellation$: Observable<Constellation | null> = of(null);
  readonly colorScheme$;
  imageZoomed = false;
  imageLoaded = false;

  constructor(
    private readonly constellationLoader: ConstellationLoader,
    colorSchemeObserver: ColorSchemeObserver,
    @Optional() private readonly logger: LoggerService
  ) {
    this.colorScheme$ = colorSchemeObserver.observe();

    this.constellations$ =
      this.constellationLoader.getConstellations();
  }

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
