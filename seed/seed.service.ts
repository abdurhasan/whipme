import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Booking } from 'src/booking/interface/booking.interface';
import { Branch } from 'src/branch/interface/branch.interface';
import { Car } from 'src/car/car.interface';
import { User } from 'src/user/interface/user.interface';
import { Model } from 'mongoose';
import { UserSeed, BookingSeed, BranchSeed, CarSeed } from './dummy'



@Injectable()
export class SeedService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('Booking') private readonly bookingModel: Model<Booking>,
    @InjectModel('Branch') private readonly branchModel: Model<Branch>,
    @InjectModel('Car') private readonly carModel: Model<Car>

  ) { }

  async remove() {
    const userSeeding = await this.userModel.remove()
    const bookingSeeding = await this.bookingModel.remove()
    const branchSeeding = await this.branchModel.remove()
    const carSeeding = await this.carModel.remove()

    return Promise.all([userSeeding, bookingSeeding, branchSeeding, carSeeding])
      .then(completed => {
        Promise.resolve(completed);
      })
      .catch(error => {
        Promise.reject(error);
      });

  }
  async seed() {

    await this.remove()

    const userSeeding = await this.userModel.insertMany(UserSeed)
    const carSeeding = await this.carModel.insertMany(CarSeed)
    const branchSeeding = await this.branchModel.insertMany(BranchSeed)
    const bookingSeeding = await this.bookingModel.insertMany(BookingSeed)
    


    return Promise.all([userSeeding, bookingSeeding, branchSeeding, carSeeding])
    // return Promise.all([branchSeeding])
      .then(completed => {
        Promise.resolve(completed);
      })
      .catch(error => {
        Promise.reject(error);
      });


  }
}
