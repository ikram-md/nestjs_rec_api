import { Module } from '@nestjs/common';
import { ClientsController } from './clients/controllers/clients/clients.controller';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [],
})
export class AppModule {}
