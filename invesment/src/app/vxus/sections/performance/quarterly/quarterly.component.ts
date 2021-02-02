import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarterly',
  templateUrl: './quarterly.component.html',
  styleUrls: ['./quarterly.component.css']
})
export class QuarterlyComponent implements OnInit {

  choice = 'NAV';

  showMenu:Boolean = false;
  hideMenu:Boolean = true;

  nav:Boolean = true;
  marketPrice:Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleChoice() {

    if (this.showMenu == false)
          this.showMenu = true;
        else
          this.showMenu = false;
  }

  
  toggleMarket() {
    this.choice = 'Market price';
    this.showMenu = false;
    this.marketPrice = true;
    this.nav = false;
  }

  toggleNav(){
    this.choice = 'NAV';
    this.showMenu = false;
    this.marketPrice = false;
    this.nav = true;
  }

}
