import { IsNotEmpty } from 'class-validator';
// import { AuthRole } from '../../auth/auth-role.enum';

export class SigninAuthDto {
    @IsNotEmpty()
    userName: string;
    @IsNotEmpty()
    password: string;
}

