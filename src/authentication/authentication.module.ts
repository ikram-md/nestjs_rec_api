import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UsersService } from 'src/users/services/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { AuthenticationController } from './controllers/authentication.controller';
import { AuthenticationService } from './services/authentication.service';
import { LocalStrategy } from './utils/LocalStrategy';
import { SessionSerializer } from './utils/session.serilizer';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
@Module({
  imports: [
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`,
      signOptions: { expiresIn: '1200s' },
    }),
    TypeOrmModule.forFeature([User]),
    UsersModule,
  ],
  controllers: [AuthenticationController],
  providers: [
    { provide: 'AUTH_SERVICE', useClass: AuthenticationService },
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
    LocalStrategy,
    JwtService,
    SessionSerializer,
  ],
})
export class AuthenticationModule {}
