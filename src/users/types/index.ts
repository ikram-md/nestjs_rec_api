import { Exclude } from 'class-transformer';

export interface User {
  username: string;
  password: string;
  profile_desc: string;
}

export class SerializedUser {
  username: string;
  @Exclude()
  password: string;
}
