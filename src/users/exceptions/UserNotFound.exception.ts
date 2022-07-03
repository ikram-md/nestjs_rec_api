import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFound extends HttpException {
  constructor(id: number) {
    super(
      'User with ID : ' + id.toString() + ' not found',
      HttpStatus.NOT_FOUND,
    );
  }
}
