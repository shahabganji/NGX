import { Component, OnInit, Input } from '@angular/core';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent {

  @Input() title = '';
  @Input() description = '';
  // tslint:disable-next-line:no-input-rename
  @Input('used') value = 0;
  // tslint:disable-next-line:no-input-rename
  @Input('available') max = 100;


  constructor() { }

  get IsDanger() {
    return this.value / this.max > .7;
  }

}
