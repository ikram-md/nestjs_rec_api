import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  @Get('/')
  getAllUsers() {
    const all_users = this.userService.getAllUsers();
    if (all_users) return all_users;
    else
      throw new HttpException(
        'Cannot get the list of users ',
        HttpStatus.BAD_REQUEST,
      );
  }

  //Fetch the user by their username
  @Get('/:username')
  getUserByUsername(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);
    if (user) return user;
    else throw new HttpException('User not found ', HttpStatus.NOT_FOUND);
  }
}
