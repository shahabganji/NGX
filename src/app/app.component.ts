import { Component } from '@angular/core';
import {StockInterface, StocksService} from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NGX';

  stocks: Array<StockInterface> = [];

  constructor(service: StocksService){
      service.load(['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR']).subscribe( stocks=>{

        console.log(stocks);
        this.stocks = stocks;
        console.log(this.stocks);

      });
  }

}
