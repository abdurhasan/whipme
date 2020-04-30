import { HttpException, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import * as Jwt from 'jsonwebtoken';
import * as config from 'config';
import { decrypt } from 'src/helper/helper';



@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor() { }

    async use(req: any, res: any, next: any) {
        let { token } = req
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
            token = decodedToken
            console.log(token)

            next()

        } catch (error) {
            throw new HttpException(error.message, 401)
        }

        // try {

        //     next();
        // } catch (e) {
        //     throw new UnauthorizedException(e.message)
        // }
    }
}
