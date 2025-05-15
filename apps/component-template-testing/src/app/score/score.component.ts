import {
  Component,
  EventEmitter,
  Input,
  numberAttribute,
  Output
} from '@angular/core';

@Component({
  selector: 'app-show-score',
  template: `
    <p>
      <strong>
        Your score is:
        <span class="value-display">{{ value }}</span>
        !
      </strong>
    </p>
    <p>
      <button (click)="onNotify()">Notify</button>
    </p>
  `
})
export class ScoreComponent {
  @Input({ required: true, transform: numberAttribute })
  value!: number;
  @Output() notify = new EventEmitter<string>();

  onNotify() {
    this.notify.emit('Your score was ' + this.value);
  }
}
