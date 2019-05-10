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
  index(@Query('tag') tag): Promise<ToolEntity | ToolEntity[]> {
    console.log(tag);
    if (!tag) return this.toolService.findAll();
    else return this.toolService.searchToolsByTag(tag);
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
