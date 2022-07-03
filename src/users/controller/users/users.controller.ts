import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/CreateUser.dto';
import { UserNotFound } from 'src/users/exceptions/UserNotFound.exception';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  //Create a new user
  @Post('create')
  @UsePipes(ValidationPipe)
  createNewUser(@Body() createNewUser: CreateUserDTO) {
    const new_user = this.userService.createNewUser(createNewUser);
    if (new_user) return new_user;
    else
      throw new HttpException('User creation failed', HttpStatus.BAD_REQUEST);
  }
}
