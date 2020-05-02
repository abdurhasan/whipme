import { AuthRole } from "src/auth/auth-role.enum";
import { UserCarOwned } from "./user-cars.interface";
import { UserDetail } from "./user-detail.interface";

export interface User {
    _id: string;
    userName: string;
    email: string;    
    password: string;
    role: AuthRole;
    isDelete: boolean;
    detail: UserDetail[];
    cars: UserCarOwned[];
}

