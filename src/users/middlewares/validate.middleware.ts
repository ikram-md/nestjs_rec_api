import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

export class ValidatorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Inside the middleware function');
  }
}
