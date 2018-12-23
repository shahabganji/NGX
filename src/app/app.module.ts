import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatButtonModule, MatCardModule, MatToolbarModule, MatGridListModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  // list of allowed components inside this module
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent
  ],
  // list of other modules that this module depends upon
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,

    HttpClientModule

  ],
  // list of services that this module depends upon
  providers: [
    StocksService
  ],
  // the component to bootstrap this module
  bootstrap: [AppComponent]
})
export class AppModule {
}
