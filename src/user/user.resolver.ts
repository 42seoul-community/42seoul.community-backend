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
    return this.userService.getUser();
  }
}
