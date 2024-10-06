import { Component, OnInit } from '@angular/core';
declare var gtag: Function;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  trackButtonClickOne() {
    gtag('event', 'click', {
      event_category: 'Button',
      event_label: 'Click Me Button home',
      value: 1,
    });
  }

  trackButtonClickTwo() {
    gtag('event', 'click', {
      event_category: 'Button',
      event_label: 'Click Me Button about',
      value: 1,
    });
  }
}
