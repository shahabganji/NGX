import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnChanges {

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

  ngOnChanges(changes) {

    if (changes.value && isNaN(changes.value.currentValue)) {
      this._value = 0;
    }

    if (changes.max && isNaN(changes.max.currentValue)) {
      this._max = 0;
    }

  }

}
