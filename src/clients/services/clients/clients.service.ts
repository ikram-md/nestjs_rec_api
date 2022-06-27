import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsService {
  findOneClient() {
    return { id: 1, email: 'ikr@gmail.com', password: 'version555' };
  }
}
