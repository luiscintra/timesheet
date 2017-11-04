import { Component } from '@angular/core';
import { TimeRecord } from '../model/time-record'
import { TimePeriod } from '../model/time-period'

@Component({
 selector: 'main',
 templateUrl: './main.component.html'
})
export class MainComponent {

    //currentRecord : TimeRecord = new TimeRecord(new Date(), new Date(), new TimePeriod(new Date(2017, 11, 5, 3, 4, 0).getTime(), new Date(2017, 11, 5, 5, 10, 0).getTime()), null);
    
    //startTime : Date = this.currentRecord.startTime;
    startTime : Date;

    //finishTime : Date = this.currentRecord.finishTime;
    finishTime : Date;

    //totalTime : TimePeriod = this.currentRecord.totalTime;
    totalTime : TimePeriod;
  
    todayEntries : TimeRecord[] = [
      new TimeRecord(new Date(), new Date(), new TimePeriod(new Date(2017, 11, 5, 3, 4, 0).getTime(), new Date(2017, 11, 5, 5, 10, 0).getTime()), null),
      new TimeRecord(new Date(), new Date(), new TimePeriod(new Date(2017, 11, 5, 3, 4, 0).getTime(), new Date(2017, 11, 5, 5, 10, 0).getTime()), null),
      new TimeRecord(new Date(), new Date(), new TimePeriod(new Date(2017, 11, 5, 3, 4, 0).getTime(), new Date(2017, 11, 5, 5, 10, 0).getTime()), null),
      new TimeRecord(new Date(), new Date(), new TimePeriod(new Date(2017, 11, 5, 3, 4, 0).getTime(), new Date(2017, 11, 5, 5, 10, 0).getTime()), null),
      new TimeRecord(new Date(), new Date(), new TimePeriod(new Date(2017, 11, 5, 3, 4, 0).getTime(), new Date(2017, 11, 5, 5, 10, 0).getTime()), null)
    ];

    startFinish() : void {

      if (this.startTime && !this.finishTime) {
        this.finishTime = new Date();
        this.finishTime.setSeconds(0);
        this.finishTime.setMilliseconds(0);

        this.totalTime = new TimePeriod(this.startTime.getTime(), this.finishTime.getTime());

      }
      
      if (!this.startTime)
        this.startTime = new Date();
        this.startTime.setSeconds(0);
        this.startTime.setMilliseconds(0);


    }


 
}