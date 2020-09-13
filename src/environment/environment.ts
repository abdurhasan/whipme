import { AppMode, IEnvironment } from "./ienvironment";

import * as dotenv from 'dotenv';
dotenv.config();

export const environment: IEnvironment = {
    port: Number(process.env.port) || 3000,
    host: process.env.host || 'http://localhost',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    production: false,
    appMode: AppMode.dev,
    EXPRESS_SESSION_SECRET: 'alksdjalksjd23lkas',
    USER_PASSWORD_BCRYPT_SALT_ROUNDS: 12,
    JWT_SECRET: 'secretKey',


};
