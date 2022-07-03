import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass, plainToInstance } from 'class-transformer';
import { User as UserEntity } from 'src/typeorm/entities/User';
import { CreateUserDTO } from 'src/users/dtos/CreateUser.dto';
import { SerializedUser, User } from 'src/users/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}
  async createNewUser(newUser: CreateUserDTO) {
    //TODO: check is there's a user with a similar email
    //TODO: crypt the user's password
    const neUsr: UserEntity = this.userRepo.create(newUser);
    return this.userRepo.save(neUsr);
  }
}
