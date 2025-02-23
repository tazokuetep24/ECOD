import { Component } from '@angular/core';
import { EnergyChartComponent } from './energy-chart/energy-chart.component';

@Component({
  selector: 'app-root',
  imports: [EnergyChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  today = new Date();
  title = 'ECOB';
  years = [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
  display = 0;
  present_year = this.today.getFullYear(); 
  periodChooser(year :number) :void{
    let today = new Date();
      if(year>(today.getFullYear()-10) || year < today.getFullYear())
        this.present_year = year;
      console.log(this.present_year);

  }

  

}

