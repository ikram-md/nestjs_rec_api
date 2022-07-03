import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  @Length(10)
  password: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
