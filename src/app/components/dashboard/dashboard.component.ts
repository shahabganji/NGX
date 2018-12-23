import { Component, OnInit } from '@angular/core';
import { StockInterface, StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  symbols: Array<string> = [];
  stocks: Array<StockInterface> = [];

  constructor(private service: StocksService) {
    // it's not a problem at all, for this is a synchronous call
    this.symbols = this.service.get();
  }

  ngOnInit() {
    // this should be done in life cycle hooks, since it is an async method call,
    // and data for consumption required to be wait
    this.service.load(this.symbols).subscribe(stocks => {
      this.stocks = stocks;
    });

  }

}
