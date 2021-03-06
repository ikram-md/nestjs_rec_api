import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async findUserByUsername(username: string, password: string): Promise<any> {
    const found_user = await this.usersService.findUserByUsername(username);
    //validating the password
    const is_match = await bcrypt.compare(password, found_user.password);
    if (found_user && is_match) {
      const { username } = found_user;
      return username;
    }
    throw new HttpException('Passwords do not match', HttpStatus.UNAUTHORIZED);
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return this.jwtService.sign(payload, {
      secret: `${process.env.JWT_SECRET}`,
    });
  }
}
