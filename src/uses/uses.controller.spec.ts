import { Test, TestingModule } from '@nestjs/testing';
import { UsesController } from './uses.controller';

describe('UsesController', () => {
  let controller: UsesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsesController],
    }).compile();

    controller = module.get<UsesController>(UsesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
