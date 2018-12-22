import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service = 'https://angular2-in-action-api.herokuapp.com';


export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}


@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) {

  }

  get() {
    return stocks.slice();
  }

  add(stock: string) {
    stocks.push(stock);
  }

  remove(stock: string) {
    stocks.splice(stocks.indexOf(stock), 1);
  }

  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }

}