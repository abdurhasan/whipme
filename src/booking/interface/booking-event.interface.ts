import { BookingEventsEnum } from '../booking-events.enum'

export interface BookingEvent{
    status:BookingEventsEnum;
    time:number
}