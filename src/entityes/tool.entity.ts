import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MaxLength, IsNotEmpty } from 'class-validator';

@Entity('tool_info')
export class ToolEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @MaxLength(20)
  @Column({ name: 'tool_title' })
  title: string;
  
  @IsNotEmpty()
  @MaxLength(100)
  @Column({ name: 'tool_link' })
  link: string;
  
  @IsNotEmpty()
  @MaxLength(250)
  @Column({ name: 'tool_description' })
  description: string;
  
  @IsNotEmpty()
  @Column('text', { name: 'tool_tags', array: true })
  tags: string[];
}
