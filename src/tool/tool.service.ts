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

  async findAll(): Promise<ToolEntity[]> {
    return await this.toolRepository.find();
  }

  async searchToolsByTag(tags: string): Promise<any> {
    return await this.toolRepository.createQueryBuilder()
      .where("tool_tags @> array[:tags]::text[]", { tags })
      .getMany();
  }

  async create(tool: ToolEntity): Promise<ToolEntity> {
    return await this.toolRepository.save(tool);
  }

  async update(tool: ToolEntity): Promise<UpdateResult> {
    return await this.toolRepository.update(tool.id, tool);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.toolRepository.delete(id);
  }
}
