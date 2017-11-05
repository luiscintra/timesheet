import { Component } from '@angular/core';
import { TimeRecord } from '../model/time-record'
import { TimePeriod } from '../model/time-period'

@Component({
  selector: 'main',
  templateUrl: './main.component.html'
})
export class MainComponent {

  todayStart: Date;
  currentPeriodStart: Date;
  
  currentMinutes: number = 0;
  currentHours: number = 0;
  
  totalMinutes: number = 0;
  totalHours: number = 0;

  timerOn: boolean = false;

  timer: any;

  todayEntries: TimeRecord[] = [
    // new TimeRecord(new Date("2017/11/05 02:31:00"), new Date("2017/11/05 02:35:00"), TimePeriod.getByInterval(new Date("2017/11/05 02:31:00"), new Date("2017/11/05 02:35:00")), null),
    // new TimeRecord(new Date("2017/11/05 02:30:55"), new Date("2017/11/05 02:31:05"), TimePeriod.getByInterval(new Date("2017/11/05 02:30:55"), new Date("2017/11/05 02:31:05")), null),
    // new TimeRecord(new Date("2017/11/05 02:29:00"), new Date("2017/11/05 02:29:00"), TimePeriod.getByInterval(new Date("2017/11/05 02:29:00"), new Date("2017/11/06 02:29:00")), null),
    // new TimeRecord(new Date("2017/11/05 02:30:00"), new Date("2017/11/06 02:29:55"), TimePeriod.getByInterval(new Date("2017/11/05 02:30:00"), new Date("2017/11/06 02:29:55")), null),
    // new TimeRecord(new Date("2017/11/05 02:30:50"), new Date("2017/11/06 02:32:00"), TimePeriod.getByInterval(new Date("2017/11/05 02:30:50"), new Date("2017/11/06 02:32:00")), null)
  ];

  startFinish(): void {

    // Stop timer
    if (this.timerOn) {

      clearInterval(this.timer);

      let now = new Date();

      this.todayEntries.push(new TimeRecord(this.currentPeriodStart, now, TimePeriod.getByInterval(this.currentPeriodStart, now), null));
      
      this.currentMinutes = 0;
      this.currentHours = 0;

      this.updateClosedPeriodsTime();

      this.sortList();

      // Start timer
    } else {
      
      
      // Update current timer every 10 seconds
      this.timer = setInterval(() => {
        //this.today = new Date();
        
        this.updateCurrentTotalTime();
        
      }, 10 * 1000);

      if(!this.todayStart)
        this.todayStart = new Date();

      this.currentPeriodStart = new Date();
      this.currentPeriodStart.setMilliseconds(0);

    }

    this.timerOn = !(this.timerOn);

  }

  private sortList(): void {

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

  private updateClosedPeriodsTime(): void {

    let pastPeriodsMinutes: number = 0;
    let pastPeriodsHours: number = 0;

    // Calculating totals for past intervals
    this.todayEntries.forEach((r) => {
      pastPeriodsMinutes += r.totalTime.minutes;
      pastPeriodsHours += r.totalTime.hours;
    });

    let interval = TimePeriod.getByHoursAndMinutes(pastPeriodsHours, pastPeriodsMinutes);

    // Update total counter
    this.totalHours = interval.hours;
    this.totalMinutes = interval.minutes;

  }

  private updateCurrentTotalTime() {

    this.updateClosedPeriodsTime();

    // Calculating elapsed time from timer + past intervals
    let currentInterval = TimePeriod.getByInterval(this.currentPeriodStart, new Date());

    // Update current counter
    this.currentMinutes = currentInterval.minutes;
    this.currentHours = currentInterval.hours;

    let totalMinutes = currentInterval.minutes + this.totalMinutes;
    let totalHours = currentInterval.hours + this.totalHours;

    // Calculating totals for today's work time
    let totalTime = TimePeriod.getByHoursAndMinutes(totalHours, totalMinutes);
    this.totalMinutes = totalTime.minutes;
    this.totalHours = totalTime.hours;

  }

}