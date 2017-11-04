import { Component } from '@angular/core'
import { DatePipe } from '@angular/common'
import { TimePeriod } from './model/time-period'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timesheet';
  today: Date;

  constructor() {

    this.today = new Date();
    
    // setInterval(() => {   
    //   this.today = new Date();
    // }, 1000);
  
  }

}

