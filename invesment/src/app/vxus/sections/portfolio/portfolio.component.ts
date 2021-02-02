import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  showEquity:Boolean = true;
  showFixed:Boolean = false;
  showShort:Boolean = false;
  showPortfolio:Boolean = false;

  showSectors:Boolean = true;
  showRegions:Boolean = false;
  showMarkets:Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleE() {
  this.showEquity = true;
  this.showFixed = false;
  this.showShort = false;
  this.showPortfolio = false;
  }
  toggleF() {
  this.showEquity = false;
  this.showFixed = true;
  this.showShort = false;
  this.showPortfolio = false;
  }
  toggleS() {
  this.showEquity = false;
  this.showFixed = false;
  this.showShort = true;
  this.showPortfolio = false;
  }
  toggleP() {
  this.showEquity = false;
  this.showFixed = false;
  this.showShort = false;
  this.showPortfolio = true;
  }

  toggleSe() {
    this.showSectors = true;
    this.showRegions = false;
    this.showMarkets = false;
  }
  toggleR() {
    this.showSectors = false;
    this.showRegions = true;
    this.showMarkets = false;
  }
  toggleM() {
    this.showSectors = false;
    this.showRegions = false;
    this.showMarkets = true;
  }

}
