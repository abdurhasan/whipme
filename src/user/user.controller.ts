import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user-dto'
import { UpdateUserDto } from './dto/update-user-dto';
import { AuthRoles } from 'src/auth/auth.guard';
import { DeleteUserDto } from './dto/delete-user-dto';
import { IsNotEmptyPipe } from 'src/helper/pipe-helper';





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
    @AuthRoles(['CAR_OWNER'])
    async getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Patch(':id')
    async updateUser(
        @Param('id') id: string,
        @Body(IsNotEmptyPipe) userUpdate: UpdateUserDto
    ): Promise<any> {
        return this.userService.updateUser(id, userUpdate)
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        const softDelete: DeleteUserDto = { isDelete: true }
        return this.userService.updateUser(id, softDelete);

    }
}
