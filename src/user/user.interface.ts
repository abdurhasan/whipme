import { AuthRole } from "src/auth/auth-role.enum";
import { UserCarOwned } from "./user-cars.interface";

export class User {
    _id: string;
    userName: string;
    email: string;    
    password: string;
    role: AuthRole;
    isDelete: boolean;
    detail: Array<object>;
    cars: UserCarOwned[];
}

