import { Component } from '@angular/core';
import { TimeRecord } from '../model/time-record'
import { TimePeriod } from '../model/time-period'

@Component({
 selector: 'main',
 templateUrl: './main.component.html'
})
export class MainComponent {

    tm : TimeRecord = new TimeRecord(new Date()/*'08:45'*/, new Date()/*'11:45'*/, new TimePeriod(new Date(2017, 11, 5, 3, 4, 0).getTime(), new Date(2017, 11, 5, 5, 10, 0).getTime()), null);
    
    startTime : Date = this.tm.startTime;
    finishTime : Date = this.tm.finishTime;
    totalTime : TimePeriod = this.tm.totalTime;
  
    todayEntries : TimeRecord[] = [
      new TimeRecord(/*'08:45'*/new Date(), /*'11:45'*/new Date(), new TimePeriod(new Date(2017, 11, 5, 3, 4, 0).getTime(), new Date(2017, 11, 5, 5, 10, 0).getTime()), null),
      new TimeRecord(/*'12:00'*/new Date(), /*'13:00'*/new Date(), new TimePeriod(new Date(2017, 11, 5, 3, 4, 0).getTime(), new Date(2017, 11, 5, 5, 10, 0).getTime()), null),
      new TimeRecord(/*'13:30'*/new Date(), /*'14:30'*/new Date(), new TimePeriod(new Date(2017, 11, 5, 3, 4, 0).getTime(), new Date(2017, 11, 5, 5, 10, 0).getTime()), null),
      new TimeRecord(/*'15:00'*/new Date(), /*'17:00'*/new Date(), new TimePeriod(new Date(2017, 11, 5, 3, 4, 0).getTime(), new Date(2017, 11, 5, 5, 10, 0).getTime()), null),
      new TimeRecord(/*'20:00'*/new Date(), /*'23:45'*/new Date(), new TimePeriod(new Date(2017, 11, 5, 3, 4, 0).getTime(), new Date(2017, 11, 5, 5, 10, 0).getTime()), null)
    ];
 
}