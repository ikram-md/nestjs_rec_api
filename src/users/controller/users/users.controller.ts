import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UserNotFound } from 'src/users/exceptions/UserNotFound.exception';
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
  @Get('username/:username')
  getUserByUsername(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);
    if (user) return user;
    else throw new HttpException('User not found ', HttpStatus.NOT_FOUND);
  }

  //Fetch the user by their id
  @Get('id/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.getUserById(id);
    if (user) return user;
    else throw new UserNotFound(id);
  }
}
