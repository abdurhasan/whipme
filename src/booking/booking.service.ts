import { Injectable } from '@nestjs/common';
import { Booking } from './interface/booking.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingEvent } from './interface/booking-event.interface';
import { BookingEventsEnum } from './booking-events.enum';



@Injectable()
export class BookingService {
    constructor(
        @InjectModel('Booking') private readonly bookingModel: Model<Booking>
    ) { }
    async getBookings(): Promise<Booking[]> {
        const bookings = await this.bookingModel.find({})
        return bookings
    }
    async createBooking(newBooking: CreateBookingDto): Promise<Booking> {
        const createdBooking = new this.bookingModel(newBooking)
        // 1. Generate Invoice ID 
        const invoiceNumber: string = 'INV' + String(createdBooking._id).toUpperCase()


        // 2. Generate Available Technicians 
        // service /getAvailableTechnicians


        // 3. Generate BookingEvent : Ordered
        const bookingEvent: BookingEvent = { status: BookingEventsEnum['0'], time: Date.now() }

        // Insert to new booking
        createdBooking.invoiceNumber = invoiceNumber
        createdBooking.events.push(bookingEvent)


        await createdBooking.save()
        return createdBooking
    }
    
}
