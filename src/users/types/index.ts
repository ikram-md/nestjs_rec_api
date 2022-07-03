import { Exclude } from 'class-transformer';

export interface User {
  username: string;
  password: string;
  email: string;
}

export class SerializedUser {
  id: number;
  username: string;
  @Exclude()
  password: string;
}
