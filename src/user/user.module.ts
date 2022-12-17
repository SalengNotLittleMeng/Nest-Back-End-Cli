import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserProviders } from './user.providers';
import {AuthService} from '../auth/auth.service'

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    UserController
  ],
  providers: [...UserProviders, UserService],
  exports: [UserService],
})
export class UserModule { }