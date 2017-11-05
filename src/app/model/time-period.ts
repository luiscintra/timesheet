export class TimePeriod {
  
  private constructor(public hours: number, public minutes: number) {}
  
  private static ONE_SECOND: number = 1000;
  private static ONE_MINUTE: number = TimePeriod.ONE_SECOND * 60;
  private static ONE_HOUR: number = TimePeriod.ONE_MINUTE * 60;

  public static getByInterval(start: Date, finish: Date): TimePeriod {

    if (start.getMilliseconds() > finish.getMilliseconds())
      throw new Error("Start date must be lower or equal than the finish date.");

    let millisDifference: number = finish.getTime() - start.getTime();
    let minutesDifference: number = finish.getMinutes() - start.getMinutes();

    let elapsedHours = Math.floor(millisDifference / TimePeriod.ONE_HOUR);
    //millisDifference -= elapsedHours * TimePeriod.ONE_HOUR;

    if (minutesDifference < 0) {
      minutesDifference = 60 + minutesDifference;
    }

    return new TimePeriod(elapsedHours, minutesDifference);

  }

  public static getByHoursAndMinutes(hours:number, minutes:number) : TimePeriod {

    let totalMinutes = minutes + hours * 60;

    let resultHours = Math.floor(totalMinutes / 60);

    let remainderMinutes = (totalMinutes % 60);

    let resultMinutes = remainderMinutes > 0 ? remainderMinutes : totalMinutes;

    return new TimePeriod(resultHours, resultMinutes);
  }

}


