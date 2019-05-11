import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult, FindManyOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ToolEntity } from '../entityes/tool.entity';

@Injectable()
export class ToolService {
  constructor(
    @InjectRepository(ToolEntity)
    private toolRepository: Repository<ToolEntity>,
  ) {}

  /**@description Find all tool columns */
  async findAll(): Promise<ToolEntity[]> {
    return await this.toolRepository.find();
  }

  /**
   * @description Find all columns with the given tag
   * @param {string} tags
   */
  async searchToolsByTag(tags: string): Promise<any> {
    return await this.toolRepository.createQueryBuilder()
      .where("tool_tags @> array[:tags]::text[]", { tags })
      .getMany();
  }

  /**
   * @description Save new tool
   * @param {ToolEntity} tool
   */
  async create(tool: ToolEntity): Promise<ToolEntity> {
    return await this.toolRepository.save(tool);
  }

  /**
   * @description Delete by id
   * @param {number} id
   */
  async delete(id: number): Promise<DeleteResult> {
    return await this.toolRepository.delete(id);
  }
}
