import { Controller, Get } from '@nestjs/common';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): UserModel {
    return this.userService.getUser();
  }
}
