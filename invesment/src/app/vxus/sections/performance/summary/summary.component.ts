import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 1,
        categoryPercentage: 0.2,
      }], yAxes: [{
        gridLines: {
          offsetGridLines: true,
        }, ticks: {
          callback: function(value, index, values) {
              return value + '%';
          }
      }
      }]
    }
  };
  public barChartLabels = [,,'QUARTER-END', 'YTD', '1 YEAR', '3 YEAR', '5 YEAR', '10 YEAR', 'SINCE INCEPTION'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [,,16.36, 11.32, 11.32, 5.02, 9.11, , 4.98], label: 'VXUS (NAV)', 
    backgroundColor: '#50e3c2'},
    {data: [,,17.21, 11.24, 11.24, 4.98, 9.07, 5.18, 5.02], label: 'Benchmark',
    backgroundColor: '#232323',}
  ];


}
