import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-literature',
  templateUrl: './fund-literature.component.html',
  styleUrls: ['./fund-literature.component.css']
})
export class FundLiteratureComponent implements OnInit {

  selectAll:Boolean = false;
  factSheet:Boolean = false;
  SummaryProspectus:Boolean = false;
  StatutoryProspectus:Boolean = false;
  Statement:Boolean = false;
  Investment:Boolean = false;
  Semiannual:Boolean = false;
  Annual:Boolean = false;

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  isAll() {
    if(this.selectAll) {
      this.factSheet = false;
      this.SummaryProspectus = false;
      this.StatutoryProspectus = false;
      this.Statement = false;
      this.Investment = false;
      this.Semiannual = false;
      this.Annual = false;
    } else {
      this.factSheet = true;
      this.SummaryProspectus = true;
      this.StatutoryProspectus = true;
      this.Statement = true;
      this.Investment = true;
      this.Semiannual = true;
      this.Annual = true;
    }
    this.isCounting()
  }
  
isCounting() {

  let areThey = [
    this.factSheet, this.SummaryProspectus, this.StatutoryProspectus
    , this.Statement, this.Investment, this.Semiannual, this.Annual
  ]

  this.count = 0;

  for (let i = 0; i < areThey.length; i++) {
      
      if (areThey[i])
            this.count++;

  }

}


}
