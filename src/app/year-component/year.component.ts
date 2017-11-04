import { Component } from '@angular/core';
import { TimeRecord } from '../model/time-record'

@Component({
 selector: 'year',
 templateUrl: './year.component.html'
})
export class YearComponent {

    tm : TimeRecord = new TimeRecord('08:45', '11:45', '03:00', null);
    
    startTime : string = this.tm.startTime;
    finishTime : string = this.tm.finishTime;
    totalTime : string = this.tm.totalTime;
  
    todayEntries : TimeRecord[] = [
      new TimeRecord('08:45', '11:45', '03:00', null),
      new TimeRecord('12:00', '13:00', '01:00', null),
      new TimeRecord('13:30', '14:30', '01:00', null),
      new TimeRecord('15:00', '17:00', '02:00', null),
      new TimeRecord('20:00', '23:45', '03:45', null)
    ];
 
}