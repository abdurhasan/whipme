

export interface IEnvironment {
    port: number;
    host: string;
    baseUrl: string;
    production: boolean;
    appMode: AppMode;
    EXPRESS_SESSION_SECRET: string
    USER_PASSWORD_BCRYPT_SALT_ROUNDS: number;
    JWT_SECRET: string;

}


export enum AppMode {
    production = 'PRODUCTION',
    dev = 'DEVELOPMENT',
    staging = 'STAGING',
}