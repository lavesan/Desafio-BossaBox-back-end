import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ToolService } from './tool.service';
import { ToolEntity } from '../entityes/tool.entity';

@Controller('tools')
export class ToolsController {
  constructor(private toolService: ToolService) {}

  @Get()
  index(@Query() query): Promise<ToolEntity | ToolEntity[]> {
    if (!query) return this.toolService.findAll();
    else return this.toolService.findOne(query.id);
  }

  @Post()
  async create(@Body() userData: ToolEntity): Promise<any> {
    return this.toolService.create(userData);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.toolService.delete(id);
  }
}
