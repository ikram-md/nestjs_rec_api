import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/typeorm/entities/User';
import { CreateUserDTO } from 'src/users/dtos/CreateUser.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}
  createNewUser(newUser: CreateUserDTO) {
    //TODO: check is there's a user with a similar email
    const user_with_email = this.userRepo.findOne({
      where: { email: newUser.email },
    });
    console.log(user_with_email);
    if (user_with_email) {
      return new HttpException(
        'User with email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    const neUsr: UserEntity = this.userRepo.create(newUser);
    return this.userRepo.save(neUsr);
  }

  async findUserByUsername(username: string) {
    const usr = await this.userRepo.findOne({ where: { username } });
    console.log(usr);
    if (usr) return usr;
    return null;
  }

  findUserById(id: number) {
    return this.userRepo.findOne({ where: { id } });
  }
}
