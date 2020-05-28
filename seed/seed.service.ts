import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Booking } from 'src/booking/interface/booking.interface';
import { Branch } from 'src/branch/interface/branch.interface';
import { Car } from 'src/car/car.interface';
import { User } from 'src/user/interface/user.interface';
import { Model } from 'mongoose';
import { UserDummy, BookingDummy, BranchDummy, CarDummy } from './dummy'



@Injectable()
export class SeedService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('Booking') private readonly bookingModel: Model<Booking>,
    @InjectModel('Branch') private readonly branchModel: Model<Branch>,
    @InjectModel('Car') private readonly carModel: Model<Car>

  ) { }

  async remove() {
    const UserDummying = await this.userModel.remove()
    const BookingDummying = await this.bookingModel.remove()
    const BranchDummying = await this.branchModel.remove()
    const CarDummying = await this.carModel.remove()

    return Promise.all([UserDummying, BookingDummying, BranchDummying, CarDummying])
      .then(completed => {
        Promise.resolve(completed);
      })
      .catch(error => {
        Promise.reject(error);
      });

  }
  async seed() {

    await this.remove()

    const UserDummying = await this.userModel.insertMany(UserDummy)
    const CarDummying = await this.carModel.insertMany(CarDummy)
    const BranchDummying = await this.branchModel.insertMany(BranchDummy)
    const BookingDummying = await this.bookingModel.insertMany(BookingDummy)
    


    return Promise.all([UserDummying, BookingDummying, BranchDummying, CarDummying])
    // return Promise.all([BranchDummying])
      .then(completed => {
        Promise.resolve(completed);
      })
      .catch(error => {
        Promise.reject(error);
      });


  }
}
