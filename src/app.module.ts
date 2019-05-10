import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToolService } from './tool/tool.service';
import { ToolsController } from './tool/tool.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolEntity } from './entityes/tool.entity';

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
  ],
  controllers: [AppController, ToolsController],
  providers: [AppService, ToolService],
})
export class AppModule {}
