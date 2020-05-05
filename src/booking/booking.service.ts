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
    async createBooking(newBooking: CreateBookingDto): Promise<any> {
        const createdBooking = new this.bookingModel(newBooking)
        // 1. Generate Invoice ID 
        const invoiceNumber: string = 'INV' + String(createdBooking._id).toUpperCase()


        // 2. Generate Available Technicians 
        // service /getAvailableTechnicians 
        // const availableTechnicians = await this.getAvailableTechnicians(newBooking.branch, newBooking.date)
        const availableTechnicians = [
            "5eb041064151a99fe7939ee0",
            "5eb041064151a99fe7939ee1"
        ]

        // 3. Generate BookingEvent : Ordered
        const bookingEvent: BookingEvent = { status: BookingEventsEnum['0'], time: Date.now() }

        // // Insert to new booking
        createdBooking.technicians.push(...availableTechnicians)
        createdBooking.invoiceNumber = invoiceNumber
        createdBooking.events.push(bookingEvent)


        await createdBooking.save()
        return createdBooking
    }

    async getAvailableTechnicians(branch: string, date: string) {
        const getBranch = await this.bookingModel.find({ $and: [{ branch }, { date }] })
        // const getBranch = await this.bookingModel.aggregate([
        //     { $match: { $and: [{ branch }, { date }] } },
        //     {
        //         $group: {
        //             _id: "$branch",
        //             technicians: { $first: "$technicians" },

        //         }
        //     }
        // ])
        return getBranch
    }
}
