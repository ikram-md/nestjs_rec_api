import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ClientsService } from 'src/clients/services/clients/clients.service';

@Controller('clients')
export class ClientsController {
  //injecting the client service in the customers list controller
  constructor(private clientService: ClientsService) {}
  @Get('/search/:id')
  searchForClient(@Param('id', ParseIntPipe) id: number) {
    const foundClient = this.clientService.findOneClient(id);
    if (foundClient) return foundClient;
    else throw new HttpException('Client was not found ', HttpStatus.NOT_FOUND);
  }
}
