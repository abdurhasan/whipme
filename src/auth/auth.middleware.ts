import { HttpException, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import * as Jwt from 'jsonwebtoken';
import * as config from 'config';
import { decrypt } from 'src/helper/helper';
import { PayloadAuthDto } from './dto/payload-auth.dto';



@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor() { }

    async use(req: any, res: any, next: any) {
        const { token } = req
        const jwtConfig = config.get("jwt")

        try {
            if (!token) {
                throw new UnauthorizedException('Required Access Token')
            }
            const decodedToken = await Jwt.verify(token, jwtConfig.secret)

            if (Date.now() >= decodedToken.exp * 1000) {
                throw new UnauthorizedException('Expired token')
            }

            decodedToken.role = decrypt(decodedToken.role)
            const user : PayloadAuthDto = decodedToken 

            req.user = user


            next()

        } catch (error) {
            throw new HttpException(error.message, 401)
        }


    }
}
