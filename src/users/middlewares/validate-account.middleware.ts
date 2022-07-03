import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateUserAccount implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers);
    const { validated } = req.headers;
    console.log(validated);
    if (validated) {
      next();
    } else return res.status(403).json({ msg: 'Access denied' });
  }
}
