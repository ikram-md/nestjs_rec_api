import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddNewClient } from 'src/clients/dtos/addNewClient.dto';
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

  @Post('/add')
  @UsePipes(ValidationPipe)
  addNewClient(@Body() addNewClient: AddNewClient) {
    console.log(addNewClient);
    return { msg: 'succesfully added the client ' };
  }

  @Get('/all')
  getAllClients() {
    const allusers = this.clientService.getAllClients();
    if (allusers) return allusers;
    else
      throw new HttpException(
        'Cannot fetch all clients',
        HttpStatus.BAD_REQUEST,
      );
  }
}
