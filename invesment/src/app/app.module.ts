import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';

import { VxusComponent } from './vxus/vxus.component';
import { OverviewComponent } from './vxus/sections/overview/overview.component';
import { PerformanceComponent } from './vxus/sections/performance/performance.component';
import { PriceComponent } from './vxus/sections/price/price.component';
import { PortfolioComponent } from './vxus/sections/portfolio/portfolio.component';
import { FundManagementComponent } from './vxus/sections/fund-management/fund-management.component';
import { FundLiteratureComponent } from './vxus/sections/fund-literature/fund-literature.component';
import { RiskComponent } from './vxus/sections/risk/risk.component';
import { ChartsModule } from 'ng2-charts';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CardComponent } from './card/card.component';
import { SummaryComponent } from './vxus/sections/performance/summary/summary.component';
import { QuarterlyComponent } from './vxus/sections/performance/quarterly/quarterly.component';
import { AnnuallyComponent } from './vxus/sections/performance/annually/annually.component';
import { CumulativeComponent } from './vxus/sections/performance/cumulative/cumulative.component';
import { EquityComponent } from './vxus/sections/portfolio/equity/equity.component';
import { FixedIncomeComponent } from './vxus/sections/portfolio/fixed-income/fixed-income.component';
import { ShortTermComponent } from './vxus/sections/portfolio/short-term/short-term.component';
import { PortfolioCompositionComponent } from './vxus/sections/portfolio/portfolio-composition/portfolio-composition.component';
import { SectorsComponent } from './vxus/sections/portfolio/weighted-exposures/sectors/sectors.component';
import { RegionsComponent } from './vxus/sections/portfolio/weighted-exposures/regions/regions.component';
import { MarketComponent } from './vxus/sections/portfolio/weighted-exposures/market/market.component';
import { CurrentComponent } from './vxus/sections/price/Historical-price/current/current.component';
import { OneMonthComponent } from './vxus/sections/price/Historical-price/one-month/one-month.component';
import { ThreeMonthComponent } from './vxus/sections/price/Historical-price/three-month/three-month.component';
import { SixMonthComponent } from './vxus/sections/price/Historical-price/six-month/six-month.component';
import { TwelveMonthComponent } from './vxus/sections/price/Historical-price/twelve-month/twelve-month.component';
import { EighteenMonthComponent } from './vxus/sections/price/Historical-price/eighteen-month/eighteen-month.component';
import { CurrentQtrComponent } from './vxus/sections/price/Premium/current-qtr/current-qtr.component';
import { QfourComponent } from './vxus/sections/price/Premium/qfour/qfour.component';
import { QthreeComponent } from './vxus/sections/price/Premium/qthree/qthree.component';
import { QtwoComponent } from './vxus/sections/price/Premium/qtwo/qtwo.component';
import { QoneComponent } from './vxus/sections/price/Premium/qone/qone.component';
import { CalendarYearComponent } from './vxus/sections/price/Premium/calendar-year/calendar-year.component';
import { ThreeComponent } from './vxus/sections/risk/three/three.component';
import { FiveComponent } from './vxus/sections/risk/five/five.component';

import { FormsModule } from '@angular/forms';
import { DisclosuresComponent } from './vxus/sections/disclosures/disclosures.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    PerformanceComponent,
    PriceComponent,
    PortfolioComponent,
    PriceComponent,
    FundManagementComponent,
    FundLiteratureComponent,
    RiskComponent,
    NavComponent,
    VxusComponent,
    TopNavComponent,
    CardComponent,
    SummaryComponent,
    QuarterlyComponent,
    AnnuallyComponent,
    CumulativeComponent,
    EquityComponent,
    FixedIncomeComponent,
    ShortTermComponent,
    PortfolioCompositionComponent,
    SectorsComponent,
    RegionsComponent,
    MarketComponent,
    CurrentComponent,
    OneMonthComponent,
    ThreeMonthComponent,
    SixMonthComponent,
    TwelveMonthComponent,
    EighteenMonthComponent,
    CurrentQtrComponent,
    QfourComponent,
    QthreeComponent,
    QtwoComponent,
    QoneComponent,
    CalendarYearComponent,
    ThreeComponent,
    FiveComponent,
    DisclosuresComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
