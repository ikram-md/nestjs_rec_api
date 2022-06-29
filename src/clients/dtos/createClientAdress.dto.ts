import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClientAdress {
  @IsNotEmpty()
  @IsString()
  line1: string;
  line2?: string;

  @IsNumber()
  zip: number;
  @IsNotEmpty()
  @IsString()
  city: string;
  @IsNotEmpty()
  @IsString()
  country: string;
}
