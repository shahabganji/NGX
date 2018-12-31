import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent {

  @Input() title = '';
  @Input() description = '';

  private _value = 0;
  private _max = 100;

  @Input('used')
  set value(value: number) {
    if (isNaN(value)) { value = 0; }

    this._value = value;
  }
  get value(): number { return this._value; }

  @Input('available')
  set max(value: number) {
    if (isNaN(value)) { value = 0; }

    this._max = value;
  }
  get max(): number { return this._max; }

  constructor() { }

  get IsDanger() {
    return this.value / this.max > .7;
  }

}
