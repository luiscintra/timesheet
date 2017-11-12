import { Component, OnInit , Input} from '@angular/core';
import { TimeRecord } from '../model/time-record'

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {

  @Input() entry: TimeRecord;

  startHours: string;
  startMinutes: string;
  
  finishHours: string;
  finishMinutes: string;

  constructor() { }

  ngOnInit() {

    this.startHours= ""+this.entry.startTime.getHours();
    this.startMinutes = ""+this.entry.startTime.getMinutes();
    
    this.finishHours = ""+this.entry.finishTime.getHours();
    this.finishMinutes = ""+this.entry.finishTime.getMinutes();

  }

}
