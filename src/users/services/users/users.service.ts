import { Injectable } from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'user1',
      password: 'password123',
      profile_desc: 'lorem epsum',
    },
    {
      id: 2,
      username: 'user2',
      password: 'password1234',
      profile_desc: 'lorem epsum',
    },
    {
      id: 3,
      username: 'user3',
      password: 'password1234',
      profile_desc: 'lorem epsum',
    },
  ];

  getAllUsers() {
    return this.users.map((u) => plainToInstance(SerializedUser, u));
  }

  getUserByUsername(u: string) {
    const usr = this.users.find((usr) => usr.username === u);
    return plainToInstance(SerializedUser, usr);
  }

  getUserById(id: number) {
    const usr = this.users.find((u) => u.id === id);
    return plainToInstance(SerializedUser, usr);
  }
}
