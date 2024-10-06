import { Component, OnInit } from '@angular/core';
declare var gtag: Function;
declare let window: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sendToDataLayerA() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'button_click',
      category: 'Button',
      action: 'Click',
      label: 'Click Me Button Home',
    });
  }

  sendToDataLayerB() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'button_click',
      category: 'Button',
      action: 'Click',
      label: 'Click Me Button About',
    });
  }
}
