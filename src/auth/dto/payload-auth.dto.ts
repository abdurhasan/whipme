import { AuthRole } from '../auth-role.enum';

export interface PayloadAuthDto {
    userName: string
    email: string;
    role: AuthRole;
    detail: object[]
}

