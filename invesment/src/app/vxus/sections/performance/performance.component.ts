import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  showSummary:Boolean = true;
  showQuarterly:Boolean = false;
  showAnnually:Boolean = false;
  showCumulative:Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleS() {
    this.showSummary = true;
    this.showQuarterly = false;
    this.showAnnually = false;
    this.showCumulative = false;
  }
  toggleQ() {
    this.showSummary = false;
    this.showQuarterly = true;
    this.showAnnually = false;
    this.showCumulative = false;
  }
  toggleA() {
    this.showSummary = false;
    this.showQuarterly = false;
    this.showAnnually = true;
    this.showCumulative = false;
  }
  toggleC() {
    this.showSummary = false;
    this.showQuarterly = false;
    this.showAnnually = false;
    this.showCumulative = true;
  }

}
