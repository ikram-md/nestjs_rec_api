import {
  Controller,
  Get,
  Inject,
  Injectable,
  Post,
  Request,
  Session,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationService } from '../services/authentication.service';
import { AuthenticatedGuard, LocalGuard } from '../utils/LocalGuard';
@Injectable()
@Controller('auth')
export class AuthenticationController {
  constructor(
    @Inject('AUTH_SERVICE') private authService: AuthenticationService,
  ) {}
  @UseGuards(LocalGuard)
  @Post('login')
  async logIn(@Request() req, @Session() session: Record<string, any>) {
    req.session.user = req.user;

    return {
      token: await this.authService.login(req.user),
      session: session.id,
    };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('catch-me')
  catchMe(@Request() req) {
    console.log("You don't have access to this route");
    return { msg: 'you caught me!' };
  }
}
