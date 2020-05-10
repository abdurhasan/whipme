import { BookingEventsEnum } from '../enum/booking-events.enum'

export interface BookingEvent{
    status:BookingEventsEnum;
    time:number
}