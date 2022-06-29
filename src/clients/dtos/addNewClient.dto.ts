import { Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotEmptyObject,
  Length,
  ValidateNested,
} from 'class-validator';
import { CreateClientAdress } from './createClientAdress.dto';

export class AddNewClient {
  @IsInt()
  id: number;
  @IsEmail()
  email: string;
  @Length(10)
  password: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateClientAdress)
  adress: CreateClientAdress;
}
