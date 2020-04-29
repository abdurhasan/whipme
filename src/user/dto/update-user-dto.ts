import { Matches, IsIn, IsArray, IsEmpty, IsOptional, IsEmail } from 'class-validator';
import { AuthRole } from '../auth-role.enum';

export class UpdateUserDto {
    @IsEmpty({ message: '_id must be in param' })
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
    @IsOptional()
    @IsIn(Object.values(AuthRole))
    role: string;        
    @IsArray()
    detail: Array<object>;
    @IsOptional()
    isDelete: boolean;
}
