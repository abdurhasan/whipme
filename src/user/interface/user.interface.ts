import { AuthRole } from "src/auth/auth-role.enum";
import { UserCarOwned } from "./user-cars.interface";
import { UserDetail } from "./user-detail.interface";

export interface User {
    _id?: string;
    email: string;  
    password: string;  
    userName: string;
    fullName:string;  
    phone:string;      
    role: AuthRole;    
    detail?: UserDetail[];
    cars?: UserCarOwned[];
}

