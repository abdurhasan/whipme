import { Injectable } from '@nestjs/common';
import { Booking } from './interface/booking.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingEvent } from './interface/booking-event.interface';
import { BookingEventsEnum } from './booking-events.enum';

import { Branch } from 'src/branch/interface/branch.interface';
import * as mongoose from 'mongoose';
import { Car } from 'src/car/car.interface';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/interface/user.interface';
import * as IsEmpty from 'is-empty';
import * as moment from 'moment';

const { ObjectId } = mongoose.Types

@Injectable()
export class BookingService {
    constructor(
        @InjectModel('Booking') private readonly bookingModel: Model<Booking>,
        @InjectModel('Branch') private readonly branchModel: Model<Branch>,
        @InjectModel('Car') private readonly carModel: Model<Car>,
        @InjectModel('User') private readonly userModel: Model<User>,


    ) { }
    async getBookings(): Promise<Booking[]> {
        const bookings = await this.bookingModel.find({})
        return bookings
    }

    getDateString(date) {
        return moment(new Date(date)).format("DD MMMM YYYY")
    }
    async createBooking(newBooking: CreateBookingDto): Promise<any> {
        const { branch, date, car } = newBooking

        const createdBooking = new this.bookingModel(newBooking).populate('car')
        const invoiceNumber: string = 'INV' + String(createdBooking._id).toUpperCase()


        // Car checking
        // const _isCarAvailable = await this.isCarAvailable(branch, date, car)
        // if (!_isCarAvailable) {
        //     throw new Error(`carId : ${car} already has service on ${this.getDateString(date)}`)
        // }
        return createdBooking

        // Technicians checking
        const listTechnicians: string[] = await this.getAvailableTechnicians(newBooking.branch, newBooking.date)



        // // 3. Generate BookingEvent : Ordered
        const bookingEvent: BookingEvent = { status: BookingEventsEnum['0'], time: Date.now() }

        // // // Insert to new booking
        // createdBooking.technicians.push(...availableTechnicians)
        // createdBooking.invoiceNumber = invoiceNumber
        // createdBooking.events.push(bookingEvent)

        // await createdBooking.save()


    }

    async getCar(carId: string) {

    }

    async assignDriver(listTechnicians) {

    }


    async isCarAvailable(branch: string, date: string, car: string) {
        const existCar = await this.bookingModel.findOne({ branch, date, car })
        return IsEmpty(existCar)
    }

    async isTechniciansAvailable(carId: string, listTechnicians: string[]) {
        // const carDetail = await this.userModel.findById(carId)

    }

    async getAvailableTechnicians(branch: string, date: string): Promise<string[]> {

        const busyTechnicians: string[] = await this.bookingModel.aggregate()
            .match({ $and: [{ branch: ObjectId(branch) }, { date }] })
            .group({ _id: "$branch", technicians: { $push: "$technicians" } })
            .project({ "_id": 0, "technicians": 1 })
            .addFields({ "technicians": { "$reduce": { "input": "$technicians", "initialValue": [], "in": { "$concatArrays": ["$$value", "$$this"] } } } })
            .then(res => res[0].technicians.map(snap => String(snap)))

        const availableTechnicians = await this.branchModel.findById(branch)
            .select('-_id technicians')
            .then(list => list.technicians.filter(el => !busyTechnicians.includes(String(el))))



        return availableTechnicians

    }
}
