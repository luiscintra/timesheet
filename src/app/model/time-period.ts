export class TimePeriod {
    
  hours : number = 0;
  minutes : number = 0;

  constructor(public elapsedMillis:number) {

    const ONE_SECOND: number = 1000;
    const ONE_MINUTE: number = ONE_SECOND * 60;
    const ONE_HOUR: number = ONE_MINUTE * 60;

    this.hours = Math.floor(elapsedMillis / ONE_HOUR);

    let remainderMinutes = (elapsedMillis % ONE_HOUR);

    if (remainderMinutes > 0) {
      this.minutes = Math.floor(remainderMinutes / ONE_MINUTE);
    }
    
  }
      
}


