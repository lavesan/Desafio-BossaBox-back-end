import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tool_info')
export class ToolEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tool_title' })
  title: string;

  @Column({ name: 'tool_link' })
  link: string;

  @Column({ name: 'tool_description' })
  description: string;

  @Column({ name: 'tool_tags' })
  tags: string;
}
