import { ComponentRef, ComponentFactoryResolver, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AlertComponent } from './components/alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // a reference to the actual component which we want to dynamically render
  alertRef: ComponentRef<AlertComponent>;
  @ViewChild('alertBox', { read: ViewContainerRef }) alertBoxContainerInApp: ViewContainerRef;


  title = 'NGX';

  @ViewChild(DashboardComponent) dashboard: DashboardComponent;

  // injects a component factory resolver which knows how to create a component and its dependencies
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  alert(date: Date) {
    this.refreshData();
    if (!this.alertRef) {
      const alertComponent = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
      this.alertRef = this.alertBoxContainerInApp.createComponent(alertComponent);
    }

    this.alertRef.instance.date = date;
    // fires any changes
    this.alertRef.changeDetectorRef.detectChanges();

    setTimeout(() => this.destroyAlert(), 30000);

  }

  destroyAlert() {
    if (this.alertRef) {
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }

  refreshData() {
    this.dashboard.generateData();
  }

}
