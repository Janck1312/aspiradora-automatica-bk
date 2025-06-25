import { Test, TestingModule } from '@nestjs/testing';
import { TimeUseController } from './time-use.controller';

describe('TimeUseController', () => {
  let controller: TimeUseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeUseController],
    }).compile();

    controller = module.get<TimeUseController>(TimeUseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
