export interface User {
    id: string;
    username: string;
    email: string;
    password: number;
    role: string;
    isDelete:boolean;
    detail: Array<object>;
}

