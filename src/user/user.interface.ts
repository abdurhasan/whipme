import { AuthRole } from "src/auth/auth-role.enum";

export interface User {
    id: string;
    userName: string;
    email: string;
    password: string;
    role: AuthRole;
    isDelete:boolean;
    detail: Array<object>;
}

