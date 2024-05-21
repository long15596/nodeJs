import { Role } from "./Role";
export default class User {
    id: number;
    username: string;
    password: string;
    name: string;
    phone: string;
    mail: string;
    avatar: string;
    status: boolean;
    role: Role[];
}
