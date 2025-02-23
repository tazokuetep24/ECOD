// energy-chart.component.ts
import {Component, Injectable, Input, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartOptions, ChartData, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { waitForAsync } from '@angular/core/testing';

@Component({
  standalone: true,
  imports: [BaseChartDirective],
  selector: 'app-energy-chart',
  templateUrl: './energy-chart.component.html',
  styleUrls: ['./energy-chart.component.css']
})

@Injectable({providedIn: 'root'})
export class EnergyChartComponent implements OnInit {
  @Input() display!: number;
  @Input() year_displayed = 2025;
  date = new Date();
  proxyUrl = "https://corsproxy.io/?";
  private apiUrl1 = 'https://api.energy-charts.info/ren_share_forecast?country=de'; // Adjust the API endpoint accordingly
  private apiUrl2 = 'https://api.energy-charts.info/ren_share_daily_avg?country=de&year=' + this.year_displayed.toString();

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['year_displayed']) {
      this.onyearChanged(changes['year_displayed'].currentValue);
    }
  }

  onyearChanged(newValue: number): void {
    console.log('myVar changed to:', newValue);
    this.apiUrl2 = 'https://api.energy-charts.info/ren_share_daily_avg?country=de&year=' + this.year_displayed.toString();
    this.chart_2_options.scales ={
  ...this.chart_2_options.scales,
    x: {
      title: {
        display: true,
        text: 'Year: ' + this.year_displayed,
        font: {
          size: 16
        }
      },
      grid: {
        color: 'rgba(200, 200, 200, 0.3)'
      }
    }}
    this.fetchEnergyDatapast();

    // Execute additional logic here
  }


  //chart Data
  data1! : ChartData<'line',number[],string>;
  data! : ChartData<'line',number[],string>;
  labels1! :string[];
  renewableShare! :number[];
  solarShare! :number[];
  windOffshore!  :number[];
  labels2! :string[];
  dataVal! : [];

  
 
  
  ngOnInit(): void {
    this.fetchEnergyData();
    this.fetchEnergyDatapast();
    this.data1 = {
      labels: [],
      datasets: []
    };
    this.data = {
      labels: [],
      datasets: []
    };

  }
  
  
  
  fetchEnergyData(): void {
    this.http.get<any>(this.proxyUrl+this.apiUrl1).subscribe(data => {
      this.labels1 = data.unix_seconds.map((timestamp: number) => new Date(timestamp * 1000).toLocaleTimeString());
      this.renewableShare = data.ren_share;
      this.solarShare = data.solar_share;
      this.windOffshore = data.wind_offshore_share;
      this.data1 = {
        labels: this.labels1,
        datasets:  [
          {
            label: 'Renewable Share Forecast',
            data: this.renewableShare,
            borderColor: 'green',
            backgroundColor: 'rgba(0, 128, 0, 0.2)',
            fill: true
          },
          {
            label: 'Solar Share',
            data: this.solarShare,
            borderColor: 'orange',
            backgroundColor: 'rgba(255, 165, 0, 0.2)',
            fill: true
          },
          {
            label: 'Wind Offshore',
            data: this.windOffshore,
            borderColor: 'blue', 
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
            fill: true
          }
        ]
        
      }
    }, error => {
      console.error('Error fetching data', error);
    });
  }

  fetchEnergyDatapast(): void {
    this.http.get<any>(this.proxyUrl+this.apiUrl2).subscribe(year => {
      this.labels2 = year.days;
      this.dataVal = year.data;
      this.data= {
        labels: this.labels2,
        datasets: [
          {
            label: 'Renewable Share',
            data: this.dataVal,
            borderColor: 'green',
            backgroundColor: 'rgba(0, 128, 0, 0.2)',
            fill: true
          }
        ]
      }
    }, error => {
      console.error('Error fetching data', error);
    });
  }
  
  

  //Daily Forecast


      line_options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: {
                size: 14
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentage (%)',
              font: {
                size: 16
              }
            },
            grid: {
              color: 'rgba(200, 200, 200, 0.3)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Date: ' + this.date.toLocaleDateString(),
              font: {
                size: 16
              }
            },
            grid: {
              color: 'rgba(200, 200, 200, 0.3)'
            }
          }
        }
      }
 
  


  //Past proportions


      chart_2_options: ChartOptions<'line'>= {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: {
                size: 14
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentage (%)',
              font: {
                size: 16
              }
            },
            grid: {
              color: 'rgba(200, 200, 200, 0.3)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Year: ' + this.year_displayed,
              font: {
                size: 16
              }
            },
            grid: {
              color: 'rgba(200, 200, 200, 0.3)'
            }
          }
        }
      }
    }




