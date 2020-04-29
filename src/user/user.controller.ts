import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
    UsePipes,
    ValidationPipe,
    ParseIntPipe,
    Query,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user-dto'
import { UpdateUserDto } from './dto/update-user-dto';
import * as isEmpty from 'is-empty'
import { DeleteUserDto } from './dto/delete-user-dto';



@UsePipes(ValidationPipe)
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(
        @Body() newUser: CreateUserDto
    ): Promise<User> {
        return this.userService.createUser(newUser)
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Patch(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() userUpdate: UpdateUserDto
    ): Promise<any> {
        if (isEmpty(userUpdate)) {
            return 'Updated nothing'
        }
        return this.userService.updateUser(id, userUpdate)
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {        
        return this.userService.updateUser(id, { isDelete: true });

    }
}
