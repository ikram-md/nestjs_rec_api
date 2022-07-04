import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthenticationService,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const usr = this.authService.findUserByUsername(username, password);
    console.log(usr);

    if (!usr) {
      console.log('validate ');
      return { msg: "passport isn't being used" };
    }
    return usr;
  }
}
