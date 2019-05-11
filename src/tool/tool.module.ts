import { Module } from '@nestjs/common';
import { ToolService } from './tool.service';
import { ToolsController } from './tool.controller';
import { ToolEntity } from '../entityes/tool.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
    TypeOrmModule.forFeature([ToolEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'loja_ferramentas',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ToolModule,
  ],
  controllers: [ToolsController],
  providers: [ToolService],})
export class ToolModule {}
