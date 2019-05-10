import { Test, TestingModule } from '@nestjs/testing';
import { ToolController } from './tool.controller';

describe('Tool Controller', () => {
  let controller: ToolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToolController],
    }).compile();

    controller = module.get<ToolController>(ToolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
