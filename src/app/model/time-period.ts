export class TimePeriod {
    
      hours : number;
      minutes : number;
    
      constructor(private startMillis:number, private endMillis:number) {
    
        const ONE_SECOND: number = 1000;
        const ONE_MINUTE: number = ONE_SECOND * 60;
        const ONE_HOUR: number = ONE_MINUTE * 60;
        //const ONE_DAY: number = ONE_HOUR * 24;
    
        let result: number = endMillis;
        
        // this.days = Math.floor ((result - startMillis) / ONE_DAY);
        // result = result - this.days * ONE_DAY;
        
        this.hours = Math.floor ((result - startMillis) / ONE_HOUR);
        result = result - this.hours * ONE_HOUR;
        
        this.minutes = Math.floor ((result - startMillis) / ONE_MINUTE);
        result = result - this.minutes * ONE_MINUTE;
        
        // this.seconds = Math.round ((result - startMillis) / ONE_SECOND);
        // result = result - this.seconds * ONE_SECOND;
    
      }
      
    }