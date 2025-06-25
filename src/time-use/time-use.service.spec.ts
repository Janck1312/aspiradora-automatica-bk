import { Test, TestingModule } from '@nestjs/testing';
import { TimeUseService } from './time-use.service';

describe('TimeUseService', () => {
  let service: TimeUseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeUseService],
    }).compile();

    service = module.get<TimeUseService>(TimeUseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
