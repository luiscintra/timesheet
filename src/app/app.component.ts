import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TimePeriod } from './time-period'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timesheet';
  today: Date = new Date();

  addTime() : void {

    this.today = new Date();
    this.today.setMinutes( 10);

  }

}
