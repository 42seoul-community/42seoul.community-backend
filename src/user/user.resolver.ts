import { UserService } from './user.service';
import { UserModel } from './user.model';
import { Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((_of: any) => UserModel)
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((_returns) => UserModel)
  async user(): Promise<UserModel> {
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
