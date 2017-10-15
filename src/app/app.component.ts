import { Component } from '@angular/core';
import { TimePeriod } from './time-period'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timesheet';
  
  tm : TimePeriod = new TimePeriod('08:45', '11:45', '03:00', null);
  
  startTime : string = this.tm.startTime;
  finishTime : string = this.tm.finishTime;
  totalTime : string = this.tm.totalTime;

  todayEntries : TimePeriod[] = [
    new TimePeriod('08:45', '11:45', '03:00', null),
    new TimePeriod('12:00', '13:00', '01:00', null),
    new TimePeriod('13:30', '14:30', '01:00', null),
    new TimePeriod('15:00', '17:00', '02:00', null),
    new TimePeriod('20:00', '23:45', '03:45', null)
  ];




}
