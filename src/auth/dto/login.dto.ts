import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {

    @IsNotEmpty()
    @IsEmail({}, { message: 'Please provide valid email' })
    readonly email: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;
}
