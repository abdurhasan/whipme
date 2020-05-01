import { Injectable, HttpException, UnauthorizedException } from '@nestjs/common';
import { SigninAuthDto } from './dto/signin-auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user-dto';
import { UserService } from 'src/user/user.service';
import { PayloadAuthDto } from './dto/payload-auth.dto';
import * as Jwt from 'jsonwebtoken';
import * as config from 'config';
import { encrypt, decrypt } from 'src/helper/encryption-helper';
import { ResponseAuthDto } from './dto/response-auth.dto';
import { User } from 'src/user/user.interface';
import * as moment from 'moment';



@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }

    private readonly jwtConfig = config.get("jwt")


    async signIn(userAuth: SigninAuthDto): Promise<ResponseAuthDto> {
        try {
            const { userName, password } = userAuth
            const userDoc: User = await this.userService.findOneByUsername(userName)

            if (!userDoc || !this.checkPassword(password, userDoc.password)) {

                throw new UnauthorizedException()
            }

            const serializePayload: PayloadAuthDto = {
                _id: userDoc._id,
                userName: userDoc.userName,
                email: userDoc.email,
                role: userDoc.role,
                detail: userDoc.detail
            }

            const token: string = this.createJwtPayload(serializePayload)

            return { success: true, token, expiresIn: this.jwtConfig.expiresIn }

        } catch (error) {
            throw error
        }


    }
    async register(newUser: CreateUserDto): Promise<User> {
        return this.userService.createUser(newUser)
    }

    checkPassword(candidatePassword: string, actualPassword: string): boolean {
        const decryptedPassword: string = decrypt(actualPassword)
        return decryptedPassword === candidatePassword
    }
    createJwtPayload(datum: PayloadAuthDto): string {
        const { expiresIn, secret } = this.jwtConfig
        return Jwt.sign(datum, secret, { expiresIn })
    }
}
