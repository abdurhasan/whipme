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
    HttpStatus
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninAuthDto } from './dto/signin-auth.dto';
import { CreateUserDto } from '../user/dto/create-user-dto';
import { responseSuccess, responseError } from '../helper/response-helper';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService

    ) { }

    @Post('/register')
    async register(
        @Body() newUser: CreateUserDto
    ) {
        try {
            const registeredUser = await this.authService.register(newUser)
            return responseSuccess(registeredUser)
        } catch (error) {
            return responseError(error.message)
        }

    }
    @Post('/signIn')
    async signIn(
        @Body() userAuth: SigninAuthDto
    ) {
        try {
            const signedIdUser = await this.authService.signIn(userAuth)
            return responseSuccess(signedIdUser)
        } catch (error) {
            return responseError(error.message)
        }



    }

}
