import { IsEmail, IsEnum, IsNotEmpty, MinLength } from "class-validator";

enum Gender {
    MALE = 'masculino',
    FEMALE = 'feminino',
    OTHER = 'outros',
}

export class UserDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    @IsNotEmpty()
    @IsEnum(Gender, {
        message: 'Genero deve ser masculino, feminino ou outros',
    })
    readonly gender: string;
}