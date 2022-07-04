import {
  Controller,
  Inject,
  Injectable,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationService } from '../services/authentication.service';
@Injectable()
@Controller('auth')
export class AuthenticationController {
  constructor(
    @Inject('AUTH_SERVICE') private authService: AuthenticationService,
  ) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async logIn(@Request() req) {
    return this.authService.login(req.user);
  }
  //implement the sign up controller
}
