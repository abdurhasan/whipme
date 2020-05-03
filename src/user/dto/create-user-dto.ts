import { IsNotEmpty, Matches, IsIn, IsArray, IsEmail, IsOptional } from 'class-validator';
import { AuthRole } from '../../auth/auth-role.enum';
import { UserDetail } from '../interface/user-detail.interface';

export class CreateUserDto {
  @IsNotEmpty()
  userName: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @Matches(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    { message: 'password too weak' },
  )
  password: string;
  @IsIn(Object.values(AuthRole))
  @IsNotEmpty()
  role: string;
  @IsArray()
  @IsOptional()
  detail: UserDetail[];
}
