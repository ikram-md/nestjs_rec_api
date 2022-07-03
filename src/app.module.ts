import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients/controllers/clients/clients.controller';
import { ClientsService } from './clients/services/clients/clients.service';
import entities from './typeorm/index';
import { UsersModule } from './users/users.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
dotenv.config();
@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      username: process.env.DATABASE_USERNAME,
      entities: entities,
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class AppModule {}
