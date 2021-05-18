import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  getUser(): UserModel {
    const user = new UserModel();
    user.id = '42';
    user.name = '김재서';
    user.phone = '010-4242-4242';
    user.email = 'jaeskim@student.42seoul.kr';
    user.fortytwoIntraId = 'jaeskim';
    user.created_at = new Date();
    user.updated_at = user.created_at;
    return user;
  }
}
