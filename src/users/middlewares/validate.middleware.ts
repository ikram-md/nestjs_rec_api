import { HttpException, HttpStatus, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

export class ValidatorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { token } = req.headers['token'];
    if (token) next();
    else return new HttpException('Access denied', HttpStatus.BAD_REQUEST);
  }
}
