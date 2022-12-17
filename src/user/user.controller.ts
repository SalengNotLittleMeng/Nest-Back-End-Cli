import { Controller, Get, Post, Body, Patch, Param, Delete,Version} from '@nestjs/common';
import { UserService } from './user.service';
import { AddUserDto } from './dto/user.dto';
import {ConfigService} from '@nestjs/config'
import {AuthService} from '../auth/auth.service'

@Controller({path:'user'})
export class UserController {
  constructor(
      private readonly userService: UserService,
      private readonly configservice: ConfigService,
      private readonly authService:AuthService
  ) {}

//   @Post()
//   create(@Body() createUserDto: CreateUserDto) {
//     return this.userService.create(createUserDto);
//   }

  @Get('getTestName')
  findTestName(){
      return this.configservice.get('TEST_VALUE').name
  }
  @Post('/add')
  create(@Body() user: AddUserDto) {
    return this.userService.createOrSave(user);
  }
 @Post('/login')
  async login(@Body() loginParmas: any) {
     const authResult = await this.authService.validateUser(
      loginParmas.name,
      loginParmas.password,
    );
    switch (authResult.code) {
      case 1:
        return this.authService.certificate(authResult.user);
      case 2:
        return {
          code: 500,
          msg: `账号或密码不正确`,
        };
      default:
        return {
          code: 404,
          msg: `当前用户未查到`,
        };
    }
  }
}
