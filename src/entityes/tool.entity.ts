import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty } from 'class-validator';

@Entity('tool_info')
export class ToolEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsEmpty({ message: 'sem título' })
  @Column({ name: 'tool_title' })
  title: string;

  @IsEmpty({ message: 'sem link' })
  @Column({ name: 'tool_link' })
  link: string;

  @IsEmpty({ message: 'sem descrição' })
  @Column({ name: 'tool_description' })
  description: string;

  @IsEmpty({ message: 'sem tags' })
  @Column('text', { name: 'tool_tags', array: true })
  tags: string[];
}
