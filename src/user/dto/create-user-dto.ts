import { IsNotEmpty, Matches, IsIn, IsArray, IsEmail } from 'class-validator';
import { AuthRole } from '../../auth/auth-role.enum';

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
  role: string;
  @IsArray()
  detail: Array<object>;
}
