import { AuthRole } from "src/auth/auth-role.enum";
import { Exclude } from "class-transformer";


export class User {
    _id: string;
    userName: string;
    email: string;
    @Exclude()
    password: string;
    role: AuthRole;
    isDelete: boolean;
    detail: Array<object>;

}

