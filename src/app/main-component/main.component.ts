import { Component } from '@angular/core';
import { TimeRecord } from '../model/time-record'
import { TimePeriod } from '../model/time-period'

@Component({
  selector: 'main',
  templateUrl: './main.component.html'
})
export class MainComponent {

  startTime: Date;

  finishTime: Date;

  totalTime: TimePeriod;

  timerOn: boolean = false;

  todayEntries: TimeRecord[] = [
    new TimeRecord(new Date(), new Date(), new TimePeriod(3 * 60 * 75000), null),
    new TimeRecord(new Date(), new Date(), new TimePeriod(3 * 60 * 75000), null),
    new TimeRecord(new Date(), new Date(), new TimePeriod(3 * 60 * 75000), null),
    new TimeRecord(new Date(), new Date(), new TimePeriod(3 * 60 * 75000), null),
    new TimeRecord(new Date(), new Date(), new TimePeriod(3 * 60 * 75000), null)
  ];

  startFinish(): void {

    if (this.timerOn) {
      this.finishTime = new Date();
      this.finishTime.setMilliseconds(0);

      this.todayEntries.push(new TimeRecord(this.startTime, this.finishTime, new TimePeriod(this.finishTime.getTime() - this.startTime.getTime()), null));

      let elapsedTotalMillis: number = 0;
      this.todayEntries.forEach((r) => 
        elapsedTotalMillis += r.totalTime.elapsedMillis
      );

      this.totalTime = new TimePeriod(elapsedTotalMillis);

    } else {
      this.startTime = new Date();
      this.startTime.setMilliseconds(0);
      
      this.finishTime = null;
      this.totalTime = null;
    }

    this.timerOn = !(this.timerOn);

  }

}