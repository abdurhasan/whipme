import { Injectable } from '@nestjs/common';
import { SigninAuthDto } from './dto/signin-auth.dto';

@Injectable()
export class AuthService {

    async signIn(userAuth: SigninAuthDto) {
        return userAuth
    }
    async register(userAuth: SigninAuthDto) {
        return userAuth
    }
}
