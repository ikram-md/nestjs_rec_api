import { Injectable } from '@nestjs/common';
import { AddNewClient } from 'src/clients/dtos/addNewClient.dto';

@Injectable()
export class ClientsService {
  users = [
    { id: 2, email: 'ikr@gmail.com', password: 'version555' },
    { id: 1, email: 'dogs@gmail.com', password: 'version554' },
    { id: 3, email: 'cats@gmail.com', password: 'version553' },
  ];
  findOneClient(id: number) {
    return this.users.find((u) => u.id === id);
  }
  //add the service over here.
  createClientService(body: AddNewClient) {
    this.users.push(body);
  }

  //getting all the clients
  getAllClients() {
    return this.users;
  }
}
