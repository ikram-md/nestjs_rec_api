import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { METHODS } from 'http';
import { User } from 'src/typeorm/entities/User';
import { UsersController } from './controller/users/users.controller';
import { ValidateUserAccount } from './middlewares/validate-account.middleware';
import { ValidatorMiddleware } from './middlewares/validate.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [{ provide: 'USER_SERVICE', useClass: UsersService }],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateUserAccount).forRoutes(UsersController);
  }
}
