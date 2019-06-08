import { Module } from '@nestjs/common';
import { ToolService } from './tool.service';
import { ToolsController } from './tool.controller';
import { ToolEntity } from '../entityes/tool.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ToolEntity]), ToolModule],
  controllers: [ToolsController],
  providers: [ToolService],
})
export class ToolModule {}
