import { Injectable } from '@nestjs/common';
import { Booking } from './interface/booking.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class BookingService {
    constructor(
        @InjectModel('Booking') private readonly branchModel: Model<Booking>
    ) { }
    async getBookings(): Promise<Booking[]> {
        const cars = await this.branchModel.find({})
        return cars
    }
    async createBooking(){
        // const cars = await this.branchModel.find({})
        // return cars
    }
}
