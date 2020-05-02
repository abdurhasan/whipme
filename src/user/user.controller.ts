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
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
import { UpdateUserDto } from './dto/update-user-dto';
import { AuthRoles } from 'src/auth/auth.guard';
import { IsNotEmptyPipe, SlugString } from 'src/helper/pipe-helper';
import { DeleteDto } from 'src/helper/delete-dto-helper';
import { AssignCarDto } from './dto/assign-car-dto';
import { CurrentUser } from '../helper/pipe-helper'
import { PayloadAuthDto } from 'src/auth/dto/payload-auth.dto';




@Controller('user')
@UsePipes(ValidationPipe)
export class UserController {
    constructor(private readonly userService: UserService) { }

    // @Post()  // : internal usage , use Auth/signUp instead
    // async createUser(
    //     @Body() newUser: CreateUserDto
    // ): Promise<User> {
    //     return this.userService.createUser(newUser)
    // }

    @Post('/assignCar')
    @AuthRoles(['CAR_OWNER', 'ADMIN'])
    async assignCar(
        @CurrentUser() currentUser: PayloadAuthDto,
        @Body(SlugString) userCarOwned: AssignCarDto
    ) {
        return this.userService.assignCar(currentUser, userCarOwned)
    }
    @Get('/:id')
    async getUserById(
        @Param('id') userId: string,
    ) {
        return this.userService.getUserById(userId)
    }

    @Get()
    @AuthRoles(['CAR_OWNER'])
    async getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Patch(':id')
    async updateUser(
        @Param('id') userId: string,
        @Body(IsNotEmptyPipe) userUpdate: UpdateUserDto
    ): Promise<User> {
        return this.userService.updateUser(userId, userUpdate)
    }

    @Delete(':id')
    async deleteUser(@Param('id') userId: string) {
        const softDelete: DeleteDto = { isDelete: true }
        return this.userService.updateUser(userId, softDelete);

    }
}
