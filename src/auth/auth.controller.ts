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

    @Post('/register')
    async register(
        @Body() newUser: CreateUserDto
    ) {
        
        return this.authService.register(newUser)
    }
    @Post('/signIn')
    async signIn(
        @Body() userAuth: SigninAuthDto
    ) {
        
        return this.authService.signIn(userAuth)
    }

}
