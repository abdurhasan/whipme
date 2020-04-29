import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninAuthDto } from './dto/signin-auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user-dto';


@UsePipes(ValidationPipe)
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
             

    ) { }

    @Post('/signIn')
    async signIn(
        @Body() userAuth: SigninAuthDto
    ) {
        // console.log(this.authService)
        return this.authService.signIn(userAuth)
    }

}
