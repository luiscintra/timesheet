import {TimePeriod} from './time-period'

export class TimeRecord {
    constructor(
        public startTime : Date,
        public finishTime : Date,
        public totalTime : TimePeriod,
        public description : string) {

    }
}