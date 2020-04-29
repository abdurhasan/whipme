import { Injectable, NotFoundException, NotImplementedException, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { AuthRole } from './auth-role.enum';
import { UpdateUserDto } from './dto/update-user-dto';
import { DeleteUserDto } from './dto/delete-user-dto';



@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) { }

  async createUser(newUser): Promise<User> {
    const _newUser = this.userModel({ ...newUser })
    try {
      await _newUser.save()
      return _newUser
    } catch (error) {
      throw new HttpException(error.message, 422)
    }
  }


  async getUsers(): Promise<User[]> {
    try {
      const users = await this.userModel.find({})
      return users
    } catch (error) {
      throw new HttpException(error.message, 501)
    }
  }



  async updateUser(_id: string, userUpdate: UpdateUserDto | DeleteUserDto) : Promise<User> {
    try {      
      const user = await this.userModel.findOneAndUpdate({_id},userUpdate)
      if(!user){
        throw new Error(`User id ${_id} is not found`)
      } 
      return user

    } catch (error) {
      throw new HttpException(error.message, 422)
    }
  }
    
    
}
