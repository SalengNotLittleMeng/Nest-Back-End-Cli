import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { In, Like, Raw, Repository } from 'typeorm';
import { User } from './entities/user.mysql.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) { }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  createOrSave(user) {
   return this.userRepository.save(user)
  }
  async findOneUser(name: string): Promise<any | undefined> {
  const user = await this.userRepository.findOne({
    where: {
      name: name,
    },
  });
  if (user == undefined) {
    return void 0;
  } else {
    return user;
  }
}
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

}
