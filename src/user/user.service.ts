import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { UpdateUserDto } from './dto/update-user-dto';
import { responseError } from 'src/helper/response-helper';
import { CreateUserDto } from './dto/create-user-dto';
import { DeleteDto } from 'src/helper/delete-dto-helper';
import { AssignCarDto } from './dto/assign-car-dto';
import { PayloadAuthDto } from 'src/auth/dto/payload-auth.dto';



@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) { }

  async assignCar(currentUser: PayloadAuthDto, userCarOwned: AssignCarDto) {
    const numberPlate: string = userCarOwned.numberPlate
    try {

      // validate duplicated numberPlate      
      const findNumberPlate = await this.userModel.find({ "cars.numberPlate": numberPlate }).select('cars -_id')
      if (findNumberPlate.length > 0) {
        
        throw new Error(`Car with number plate : ${numberPlate} has been registered`)
      }

      return await this.userModel.updateOne(
        { _id: currentUser._id },
        {
          $push: { cars: userCarOwned }
        })


      // return 'you can assign car'


    } catch (error) {
      return responseError(error.message, HttpStatus.UNPROCESSABLE_ENTITY)
    }
  }

  async getUserById(userId: string): Promise<User> {
    try {

      return await this.userModel.findById(userId)

    } catch (error) {
      return responseError(error.message, HttpStatus.UNPROCESSABLE_ENTITY)

    }
  }
  async createUser(newUser: CreateUserDto): Promise<User> {
    const _newUser = new this.userModel(newUser)
    try {
      await _newUser.save()
      return _newUser
    } catch (error) {
      return responseError(error.message, HttpStatus.NOT_IMPLEMENTED)
    }
  }


  async getUsers(): Promise<User[]> {
    try {
      const users = await this.userModel.find({})
      return users
    } catch (error) {
      return responseError(error.message, HttpStatus.NOT_IMPLEMENTED)
    }
  }



  async updateUser(_id: string, userUpdate: UpdateUserDto | DeleteDto): Promise<User> {
    try {

      const user = await this.userModel.findById(_id)
      for (const key in userUpdate) {
        user[key] = userUpdate[key]
      }

      await user.save()
      return user

    } catch (error) {
      return responseError(error.message, HttpStatus.UNPROCESSABLE_ENTITY)
    }
  }


  async findOneByUsername(userName: string): Promise<User> {
    try {
      const user = await this.userModel.findOne({ userName: userName })
      return user
    } catch (error) {
      return responseError(error.message, HttpStatus.UNPROCESSABLE_ENTITY)
    }
  }


}
