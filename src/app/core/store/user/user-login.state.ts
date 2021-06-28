import { User } from "../../models/user.model";

export interface UserLoginState{
    status: "idle" | "not exist" | "incorrect password" | "check username" | 'check username success',
    mess: string,
    user : User | null
}