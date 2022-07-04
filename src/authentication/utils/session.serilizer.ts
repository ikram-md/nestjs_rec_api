import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/typeorm/entities/User';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {
    super();
  }

  serializeUser(user: User, done: (err, user: User) => void) {
    console.log('inside serializeUser');
    done(null, user);
  }
  async deserializeUser(user: User, done: (err, user: User) => void) {
    console.log('inside desirialize user');

    const userdb = await this.userService.findUserById(user.id);
    userdb ? done(null, userdb) : done(null, null);
  }
}
