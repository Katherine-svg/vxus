import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {


  showThree:Boolean = true;
  showFive:Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleT() {
    this.showThree = true;
    this.showFive = false;
  }
  toggleF() {
    this.showThree = false;
    this.showFive = true;
  }

}
