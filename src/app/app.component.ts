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

  constructor(){

    this.today = new Date();
  
  }
  
  addTime() : void {

    // As the date object does not change, change detection does not happen
    this.today.setMinutes(this.today.getMinutes() + 10);

    // Hence, the simpler solution is to create another date object
    this.today = new Date(this.today.toISOString());

  }

}
