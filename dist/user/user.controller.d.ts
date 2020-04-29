import { UserService } from './user.service';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(newUser: CreateUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
    updateUser(id: string, userUpdate: UpdateUserDto): Promise<any>;
    deleteUser(id: string): Promise<User>;
}
