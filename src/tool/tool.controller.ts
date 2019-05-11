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

  /**
   * @description Returns all tool in database or all tool with the passed tag if it's given
   * @param {string} tag 
   * @returns {Promise<ToolEntity[]>}
   */
  @Get()
  index(@Query('tag') tag): Promise<ToolEntity[]> {
    if (!tag) return this.toolService.findAll();
    else return this.toolService.searchToolsByTag(tag);
  }

  /**
   * @description Save a new tool passed on Body
   * @param {ToolEntity} toolData
   */
  @Post()
  async create(@Body() toolData: ToolEntity): Promise<any> {
    return this.toolService.create(toolData);
  }

  /**
   * @description Delete the item that matches the given id
   * @param {number} id
   */
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    return this.toolService.delete(id);
  }
}
