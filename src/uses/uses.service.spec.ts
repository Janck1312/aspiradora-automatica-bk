import { Test, TestingModule } from '@nestjs/testing';
import { UsesService } from './uses.service';

describe('UsesService', () => {
  let service: UsesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsesService],
    }).compile();

    service = module.get<UsesService>(UsesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
