import { Test, TestingModule } from '@nestjs/testing';
import { UserModel } from './user.model';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should return UserModel Object', () => {
    expect(service.getUser()).toBeInstanceOf(UserModel);
  });
});
