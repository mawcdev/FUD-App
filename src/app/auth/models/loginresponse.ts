import { UserDto } from "./user";

export interface LoginResponseDto{
    user:UserDto;
    token:string;
}