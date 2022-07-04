import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  async findUserByUsername(username: string, password: string): Promise<any> {
    const found_user = await this.usersService.findUserByUsername(username);
    //validating the password
    const is_match = await bcrypt.compare(password, found_user.password);
    if (found_user && is_match) {
      const { username } = found_user;
      return username;
    }
    return null;
  }
}
