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
import { User } from './interface/user.interface';
import { UpdateUserDto } from './dto/update-user-dto';
import { AuthRoles } from '../auth/auth.guard';
import { IsNotEmptyPipe, SlugString } from '../helper/pipe-helper';
import { DeleteDto } from '../helper/delete-dto-helper';
import { AssignCarDto } from './dto/assign-car-dto';
import { CurrentUser } from '../helper/pipe-helper'
import { PayloadAuthDto } from '../auth/dto/payload-auth.dto';
import { responseSuccess, responseError } from '../helper/response-helper';





@Controller('user')
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
        try {
            const assigningCar = await this.userService.assignCar(currentUser, userCarOwned)
            return responseSuccess(assigningCar)
        } catch (error) {
            return responseError(error.message)
        }

    }
    @Get('/:id')
    async getUserById(
        @Param('id') userId: string,
    ) {

        try {
            const userById = await this.userService.getUserById(userId)
            return responseSuccess(userById)
        } catch (error) {
            return responseError(error.message)
        }
    }

    @Get()
    @AuthRoles(['CAR_OWNER'])
    async getUsers() {
        try {
            const users = await this.userService.getUsers();
            return responseSuccess(users)
        } catch (error) {
            return responseError(error.message)
        }
    }

    @Patch(':id')
    async updateUser(
        @Param('id') userId: string,
        @Body(IsNotEmptyPipe) userUpdate: UpdateUserDto
    ) {
        try {
            const updatedUser = await this.userService.updateUser(userId, userUpdate)
            return responseSuccess(updatedUser)
        } catch (error) {
            return responseError(error.message)
        }

    }

    @Delete(':id')
    async deleteUser(@Param('id') userId: string) {
        const softDelete: DeleteDto = { isDelete: true }

        try {
            const deletedUser = await this.userService.updateUser(userId, softDelete);
            return responseSuccess(deletedUser)
        } catch (error) {
            return responseError(error.message)
        }

    }
}
