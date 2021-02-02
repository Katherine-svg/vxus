import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-management',
  templateUrl: './fund-management.component.html',
  styleUrls: ['./fund-management.component.css']
})
export class FundManagementComponent implements OnInit {

  indexGroup: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  isIndexGroup() {

    if(this.indexGroup)
    this.indexGroup = false;
    else
    this.indexGroup = true;
    
  }

}
