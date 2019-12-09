import {Component, Input, OnInit} from '@angular/core';
import {IContacts} from '../../data/data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {

  public toggledTemperature = true;
  @Input() contact: IContacts[];
  private colorRange = ['white', 'green', 'red', 'yellow', 'gray', 'blue', 'white'];


  toggle(): void {
    setInterval(() => this.toggledTemperature = !this.toggledTemperature, 2000);
  }

  ngOnInit(): void {
    this.toggle();
  }
}
