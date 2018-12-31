import { Component, OnInit, OnDestroy } from '@angular/core';


interface IMetric {
  used: number;
  available: number;
}

interface INode {
  name: string;
  cpu: IMetric;
  mem: IMetric;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  cpu: IMetric;
  mem: IMetric;

  cluster1: INode[];
  cluster2: INode[];

  interval: any;

  constructor() { }

  ngOnInit() {
    this.generateData();

    this.interval = setInterval(() => {
      this.generateData();
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = { used: 0, available: 0 };
    this.mem = { used: 0, available: 0 };

    for (let i = 1; i < 4; i++) { this.cluster1.push(this.randomNode(i)); }
    for (let i = 4; i < 7; i++) { this.cluster2.push(this.randomNode(i)); }

  }

  private randomNode(i: number): INode {
    const node = {
      name: 'node' + i,
      cpu: { available: 16, used: this.randomInteger(0, 16) },
      mem: { available: 48, used: this.randomInteger(0, 48) }
    };
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;

    return node;
  }

  private randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }

}
