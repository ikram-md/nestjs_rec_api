import { IsEmail, IsInt, Length } from 'class-validator';

export class AddNewClient {
  @IsInt()
  id: number;
  @IsEmail()
  email: string;
  @Length(10)
  password: string;
}
