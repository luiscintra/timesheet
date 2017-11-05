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
    new TimeRecord(new Date("2017/11/05 02:31:00"), new Date("2017/11/05 02:35:00"), TimePeriod.getByInterval(new Date("2017/11/05 02:31:00"), new Date("2017/11/05 02:35:00")), null),
    new TimeRecord(new Date("2017/11/05 02:30:55"), new Date("2017/11/05 02:31:05"), TimePeriod.getByInterval(new Date("2017/11/05 02:30:55"), new Date("2017/11/05 02:31:05")), null),
    new TimeRecord(new Date("2017/11/05 02:29:00"), new Date("2017/11/05 02:29:00"), TimePeriod.getByInterval(new Date("2017/11/05 02:29:00"), new Date("2017/11/06 02:29:00")), null),
    new TimeRecord(new Date("2017/11/05 02:30:00"), new Date("2017/11/06 02:29:55"), TimePeriod.getByInterval(new Date("2017/11/05 02:30:00"), new Date("2017/11/06 02:29:55")), null),
    new TimeRecord(new Date("2017/11/05 02:30:50"), new Date("2017/11/06 02:32:00"), TimePeriod.getByInterval(new Date("2017/11/05 02:30:50"), new Date("2017/11/06 02:32:00")), null)
  ];

  startFinish(): void {

    if (this.timerOn) {
      this.finishTime = new Date();
      this.finishTime.setMilliseconds(0);

      this.todayEntries.push(new TimeRecord(this.startTime, this.finishTime, TimePeriod.getByInterval(this.startTime, this.finishTime), null));

      let elapsedTotalMinutes: number = 0;
      let elapsedTotalHours: number = 0;

      this.todayEntries.forEach((r) => {
        elapsedTotalMinutes += r.totalTime.minutes;
        elapsedTotalHours += r.totalTime.hours;
      });

      this.totalTime = TimePeriod.getByHoursAndMinutes(elapsedTotalHours, elapsedTotalMinutes);

      this.sortList();

    } else {
      this.startTime = new Date();
      this.startTime.setMilliseconds(0);
      
      this.finishTime = null;
      this.totalTime = null;
    }

    this.timerOn = !(this.timerOn);

  }

  private sortList() : void {

    this.todayEntries.sort(
      (a, b) => {
       let startTime = a.startTime.getTime() - b.startTime.getTime();

       let result = startTime;

       if (result == 0) {
        result = a.finishTime.getTime() - b.startTime.getTime();
       }

        return result;
      }
    );

  }

}