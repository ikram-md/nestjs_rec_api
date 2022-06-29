import { Module } from '@nestjs/common';
import { ClientsController } from './clients/controllers/clients/clients.controller';
import { ClientsService } from './clients/services/clients/clients.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class AppModule {}
