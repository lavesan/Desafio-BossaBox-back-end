import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MaxLength, IsNotEmpty } from 'class-validator';

@Entity('tool_info')
export class ToolEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty({ message: 'o título não pode ser vazio' })
  @MaxLength(20, { message: 'o título aceita no máximo 20 caracteres' })
  @Column({ name: 'tool_title', nullable: false, type: 'text' })
  title: string;

  @IsNotEmpty({ message: 'o link não pode ser vazio' })
  @MaxLength(100, { message: 'o link aceita no máximo 100 caracteres' })
  @Column({ name: 'tool_link', nullable: false, type: 'text' })
  link: string;

  @IsNotEmpty({ message: 'a descrição não pode ser vazia' })
  @MaxLength(250, { message: 'a descrição aceita no máximo 250 caracteres' })
  @Column({ name: 'tool_description', nullable: false, type: 'text' })
  description: string;

  @IsNotEmpty({ message: 'as tags não podem ser vazias' })
  @Column('text', {
    name: 'tool_tags',
    array: true,
    nullable: true,
  })
  tags: string[];
}
