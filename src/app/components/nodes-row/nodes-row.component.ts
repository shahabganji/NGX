import { Component, OnInit, Input } from '@angular/core';
import { INode } from '../dashboard/dashboard.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.scss']
})
export class NodesRowComponent {

  @Input() node: INode;

  isDanger(prop: string): boolean {
    return this.node[prop].used / this.node[prop].available > .7;
  }

}
