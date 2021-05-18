import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should return UserModel Object', () => {
    expect(controller.getUser()).toBeInstanceOf(UserModel);
  });
});
