import { Injectable, NotFoundException, NotImplementedException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { AuthRole } from '../auth/auth-role.enum';
import { UpdateUserDto } from './dto/update-user-dto';
import { DeleteUserDto } from './dto/delete-user-dto';
import { responseError } from 'src/helper/helper';



@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) { }

  async createUser(newUser): Promise<User> {
    const _newUser = this.userModel(newUser)
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



  async updateUser(_id: string, userUpdate: UpdateUserDto | DeleteUserDto): Promise<User> {
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

  async findOneByUsername(userName): Promise<User> {
    try {
      const user = await this.userModel.findOne({ userName: userName })
      return user
    } catch (error) {
      throw error
    }
  }


}
