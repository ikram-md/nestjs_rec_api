import { Controller, Get } from '@nestjs/common';
import { ClientsService } from 'src/clients/services/clients/clients.service';

@Controller('clients')
export class ClientsController {
  //injecting the client service in the customers list controller
  constructor(private clientService: ClientsService) {}
  @Get('')
  getCustomersList() {
    return this.clientService.findOneClient();
  }
}
