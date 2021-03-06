import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule, MatCardModule, MatToolbarModule, MatGridListModule,
  MatFormFieldModule, MatInputModule, MatDividerModule, MatTableModule, MatListModule, MatProgressBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MetricComponent } from './components/metric/metric.component';
import { NodesComponent } from './components/nodes/nodes.component';
import { NodesRowComponent } from './components/nodes-row/nodes-row.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  // list of allowed components inside this module
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    MetricComponent,
    NodesComponent,
    NodesRowComponent,
    AlertComponent
  ],
  // list of other modules that this module depends upon
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatTableModule,
    MatListModule,
    MatProgressBarModule,

    HttpClientModule

  ],
  // for dynamic components
  entryComponents: [
    AlertComponent
  ],
  // list of services that this module depends upon
  providers: [
  ],
  // the component to bootstrap this module
  bootstrap: [AppComponent]
})
export class AppModule {
}
