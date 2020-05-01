import { Matches, IsIn, IsArray, IsEmpty, IsOptional, IsEmail, IsNotEmpty } from 'class-validator';
import { AuthRole } from '../../auth/auth-role.enum';

export class UpdateUserDto {
    @IsEmpty({ message: 'you cannot change the id' })
    _id: string;
    @IsEmpty()
    userName: string;
    @IsOptional()
    @IsEmail()
    email: string;
    @IsOptional()
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'password too weak' },
    )
    password: string;    
    @IsIn(Object.values(AuthRole))
    @IsOptional()
    role: string;        
    @IsArray()
    detail: Array<object>;
    @IsOptional()
    isDelete: boolean;
}
