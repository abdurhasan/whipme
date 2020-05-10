import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { UpdateUserDto } from './dto/update-user-dto';
import { CreateUserDto } from './dto/create-user-dto';
import { DeleteDto } from '../helper/delete-dto-helper';
import { AssignCarDto } from './dto/assign-car-dto';
import { PayloadAuthDto } from '../auth/dto/payload-auth.dto';
import { CarService } from '../car/car.service';




@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly carService: CarService
  ) { }

  async assignCar(currentUser: PayloadAuthDto, userCarOwned: AssignCarDto) {
    const numberPlate: string = userCarOwned.numberPlate

    const findNumberPlate = await this.userModel.find({ "cars.numberPlate": numberPlate }).select('cars -_id')  // validate duplicated numberPlate      


    if (findNumberPlate.length > 0) {

      throw new Error(`Car with number plate : ${numberPlate} has been registered`)
    }

    try {

      await this.carService.findByIdUpsert(userCarOwned.detail._id, userCarOwned.detail)

      const updatedUser = await this.userModel.findOneAndUpdate(
        { _id: currentUser._id },
        {
          $push: { cars: userCarOwned }
        })

      if (!updatedUser) {
        throw new Error(`Failed to assign new car, user can not updated`)
      }

      return updatedUser


    } catch (error) {
      return error
    }



  }

  async getUserById(userId: string): Promise<User> {
    const userById: User = await this.userModel.findById(userId)
    return userById
  }
  async createUser(newUser: CreateUserDto): Promise<any> {
    if(newUser.role !== 'CAR_OWNER'){      
      delete newUser.cars
    }
    const createdUser = new this.userModel(newUser)
    
    await createdUser.save()
    return createdUser
  }



  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find({}).populate('cars.detail','model year brand type')
    return users
  }



  async updateUser(_id: string, userUpdate: UpdateUserDto | DeleteDto): Promise<User> {
    const user = await this.userModel.findById(_id)

    if (!user) {
      throw new Error('User is not found')
    }

    for (const key in userUpdate) {
      user[key] = userUpdate[key]
    }

    await user.save()

    return user
  }


  async findOneByUsername(userName: string): Promise<User> {
    const user = await this.userModel.findOne({ userName: userName })
    return user
  }


}
