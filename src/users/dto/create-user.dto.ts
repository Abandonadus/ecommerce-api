import { IsEmail, IsInt, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(1, { message: `O campo nome não pode estar vazio` })
  name: string;

  @IsEmail()
  email: string;

  @IsInt({ message: `O campo 'função' não foi preenchido corretamente` })
  role_id: number;

  @IsString()
  @MinLength(6, {
    message: `O campo 'senha' deve possuir um valor maior ou igual a 6 caracteres`,
  })
  password: string;
}
