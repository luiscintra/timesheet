import { Component } from '@angular/core'
import { DatePipe } from '@angular/common'
import { TimePeriod } from './time-period'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timesheet';
  today: Date;

  start: Date = new Date("2017-11-01T00:13:00");

  one_second: number = 1000;
  one_minute: number = this.one_second * 60;
  one_hour: number = this.one_minute * 60;
  one_day: number = this.one_hour * 24;
  one_month: number = this.one_day * 30;

  constructor(){

    this.today = new Date();

    setInterval(() => {   

      this.today = new Date();

      let now: number = new Date().getTime();

      console.log("Ms: " + Math.abs (now - this.start.getTime()));

      let sec: number = Math.round ((now - this.start.getTime()) / this.one_second);

      console.log("Seconds: " + sec);
      console.log("Minutes: " + Math.round ((now - this.start.getTime()) / this.one_minute));
      console.log("Hours: " + Math.round ((now - this.start.getTime()) / this.one_hour));
      console.log("Days: " + Math.round ((now - this.start.getTime()) / this.one_day));


    }, 1000);
  
  }

}
