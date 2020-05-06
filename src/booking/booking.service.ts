import { Injectable } from '@nestjs/common';
import { Booking } from './interface/booking.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingEvent } from './interface/booking-event.interface';
import { BookingEventsEnum } from './booking-events.enum';

import { Branch } from 'src/branch/interface/branch.interface';
import * as mongoose from 'mongoose';

const { ObjectId } = mongoose.Types

@Injectable()
export class BookingService {
    constructor(
        @InjectModel('Booking') private readonly bookingModel: Model<Booking>,
        @InjectModel('Branch') private readonly branchModel: Model<Branch>,
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
        const availableTechnicians = await this.getAvailableTechnicians(newBooking.branch, newBooking.date)

        // // 3. Generate BookingEvent : Ordered
        // const bookingEvent: BookingEvent = { status: BookingEventsEnum['0'], time: Date.now() }

        // // // Insert to new booking
        // createdBooking.technicians.push(...availableTechnicians)
        // createdBooking.invoiceNumber = invoiceNumber
        // createdBooking.events.push(bookingEvent)

        // await createdBooking.save()

        return availableTechnicians
    }

    async getAvailableTechnicians(branch: string, date: string) {

        const busyTechnicians: string[] = await this.bookingModel.aggregate([

            { $match: { $and: [{ branch }, { date }] } },
            {
                $group: {
                    _id: "$branch",
                    technicians: { $push: "$technicians" }
                }
            },
            { $project: { "_id": 0, "technicians": 1 } },
            {
                $addFields: {
                    technicians: {
                        "$reduce": {
                            "input": "$technicians",
                            "initialValue": [],
                            "in": { "$concatArrays": ["$$value", "$$this"] }
                        }
                    }
                }
            }
        ]).then(res => res[0].technicians)

        // const listTechnicians = await this.branchModel.findById({ _id: branch }).select('technicians -_id')


        // const freeTechnicians = listTechnicians.filter( techy => !busyTechnicians.includes(techy))

        return busyTechnicians
        // return freeTechnicians
    }
}


// db.getCollection('stuff').aggregate([
//     {
//         "$group": {
//             "_id": {
//                 "product": "$product", "state": "$state"
//             },
//             "nondnd": { "$push": "$nondnd" },
//             "dnd": { "$push": "$dnd" },
//             "land": { "$push": "$land" },
//             "technicians": { "$push": "$technicians" }
//         }
//     },
// ])