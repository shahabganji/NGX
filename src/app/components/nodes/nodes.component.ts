import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-nodes]', // it will be an attribute on an element rather than being a custom html tag
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
