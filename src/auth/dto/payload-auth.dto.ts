import { AuthRole } from '../enum/auth-role.enum';

export interface PayloadAuthDto {
    _id: string;
    userName: string;
    email: string;
    role: AuthRole;
    detail: object[];
    exp?: number;
    iat?: number;
}

