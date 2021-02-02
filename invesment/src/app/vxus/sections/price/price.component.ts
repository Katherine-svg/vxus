import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  showCurrent:Boolean = true;
  showOne:Boolean = false;
  showThree:Boolean = false;
  showSix:Boolean = false;
  showTwelve:Boolean = false;
  showEighteen:Boolean = false;

  showCurrentQtr:Boolean = true;
  showQfour:Boolean = false;
  showQthree:Boolean = false;
  showQtwo:Boolean = false;
  showQone:Boolean = false;
  showCalendar:Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleC() {
    this.showCurrent = true;
    this.showOne = false;
    this.showThree = false;
    this.showSix = false;
    this.showTwelve = false;
    this.showEighteen = false;
  }
  toggleO() {
    this.showCurrent = false;
    this.showOne = true;
    this.showThree = false;
    this.showSix = false;
    this.showTwelve = false;
    this.showEighteen = false;
  }
  toggleT() {
    this.showCurrent = false;
    this.showOne = false;
    this.showThree = true;
    this.showSix = false;
    this.showTwelve = false;
    this.showEighteen = false;
  }
  toggleS() {
    this.showCurrent = false;
    this.showOne = false;
    this.showThree = false;
    this.showSix = true;
    this.showTwelve = false;
    this.showEighteen = false;
  }
  toggleTw() {
    this.showCurrent = false;
    this.showOne = false;
    this.showThree = false;
    this.showSix = false;
    this.showTwelve = true;
    this.showEighteen = false;
  }
  toggleE() {
    this.showCurrent = false;
    this.showOne = false;
    this.showThree = false;
    this.showSix = false;
    this.showTwelve = false;
    this.showEighteen = true;
  }


  toggleCq() {
    this.showCurrentQtr = true;
    this.showQfour = false;
    this.showQthree = false;
    this.showQtwo = false;
    this.showQone = false;
    this.showCalendar = false;
  }
  toggleQf() {
    this.showCurrentQtr = false;
    this.showQfour = true;
    this.showQthree = false;
    this.showQtwo = false;
    this.showQone = false;
    this.showCalendar = false;
  }
  toggleQt() {
    this.showCurrentQtr = false;
    this.showQfour = false;
    this.showQthree = true;
    this.showQtwo = false;
    this.showQone = false;
    this.showCalendar = false;
  }
  toggleQtw() {
    this.showCurrentQtr = false;
    this.showQfour = false;
    this.showQthree = false;
    this.showQtwo = true;
    this.showQone = false;
    this.showCalendar = false;
  }
  toggleQo() {
    this.showCurrentQtr = false;
    this.showQfour = false;
    this.showQthree = false;
    this.showQtwo = false;
    this.showQone = true;
    this.showCalendar = false;
  }
  toggleCy() {
    this.showCurrentQtr = false;
    this.showQfour = false;
    this.showQthree = false;
    this.showQtwo = false;
    this.showQone = false;
    this.showCalendar = true;
  }



}
