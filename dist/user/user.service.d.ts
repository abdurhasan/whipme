import { Model } from 'mongoose';
import { User } from './user.interface';
import { UpdateUserDto } from './dto/update-user-dto';
import { DeleteUserDto } from './dto/delete-user-dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(newUser: any): Promise<User>;
    getUsers(): Promise<User[]>;
    updateUser(_id: string, userUpdate: UpdateUserDto | DeleteUserDto): Promise<User>;
}
