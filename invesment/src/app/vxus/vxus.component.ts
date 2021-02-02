import { Component, OnInit, ViewChildren, QueryList, HostListener, ViewChild, ElementRef } from '@angular/core';
import { OverviewComponent } from './sections/overview/overview.component';

@Component({
  selector: 'app-vxus',
  templateUrl: './vxus.component.html',
  styleUrls: ['./vxus.component.css']
})
export class VxusComponent implements OnInit {

vrvw:Boolean = false;
prfrmnc:Boolean = false;
prc:Boolean = false;
prtfl:Boolean = false;
rsk:Boolean = false;
mngmnt:Boolean = false;
ltrtr:Boolean = false;

stick:Boolean = false;

menuPosition: any;

@ViewChild('stickyMenu') menuElement: ElementRef;

@ViewChild('overview') overviewElement: ElementRef;
@ViewChild('performance') performanceElement: ElementRef;
@ViewChild('price') priceElement: ElementRef;
@ViewChild('portfolio') portfolioElement: ElementRef;
@ViewChild('risk') riskElement: ElementRef;
@ViewChild('management') managementElement: ElementRef;
@ViewChild('literature') literatureElement: ElementRef;

overviewPosition: any;
performancePosition: any;
pricePosition: any;
portfolioPosition: any;
riskPosition: any;
managementPosition: any;
literaturePosition: any;
  
  constructor() { }
  
  ngAfterViewInit(){
    this.menuPosition = this.menuElement.nativeElement.offsetTop

    this.overviewPosition = this.overviewElement.nativeElement.offsetTop-100
    this.performancePosition = this.performanceElement.nativeElement.offsetTop-100
    this.pricePosition = this.priceElement.nativeElement.offsetTop-100
    this.portfolioPosition = this.portfolioElement.nativeElement.offsetTop-100
    this.riskPosition = this.riskElement.nativeElement.offsetTop-100
    this.managementPosition = this.managementElement.nativeElement.offsetTop-100
    this.literaturePosition = this.literatureElement.nativeElement.offsetTop-100
}

@HostListener("window:scroll", ['$event']) 
onMenuScroll() {
  const windowScroll = window.pageYOffset;
        if(windowScroll >= this.menuPosition){
            this.stick = true;
        } else {
            this.stick = false;
        }

      if(windowScroll > this.overviewPosition 
        && windowScroll < this.performancePosition)
        this.vrvw = true;
      else
        this.vrvw = false;

      if(windowScroll > this.performancePosition 
        && windowScroll < this.pricePosition)
        this.prfrmnc = true;
      else
        this.prfrmnc = false;

      if(windowScroll > this.pricePosition 
        && windowScroll < this.portfolioPosition)
          this.prc = true;
        else
          this.prc = false;

      if(windowScroll > this.portfolioPosition
        && windowScroll < this.riskPosition)
          this.prtfl = true;
        else
          this.prtfl = false;

      if(windowScroll > this.riskPosition
          && windowScroll < this.managementPosition)
            this.rsk = true;
          else
            this.rsk = false;

      if(windowScroll > this.managementPosition
          && windowScroll < this.literaturePosition)
            this.mngmnt = true;
          else
            this.mngmnt = false;
        
      if(windowScroll > this.literaturePosition)
            this.ltrtr = true;
          else
            this.ltrtr = false;
 }

 
  ngOnInit(): void {
  }

}
