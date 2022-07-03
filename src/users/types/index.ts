import { Exclude } from 'class-transformer';

export interface User {
  id: number;
  username: string;
  password: string;
  profile_desc: string;
}

export class SerializedUser {
  id: number;
  username: string;
  @Exclude()
  password: string;
}
