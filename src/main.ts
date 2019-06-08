import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as rateLimit from 'express-rate-limit';

const cors = { origin: true, methods: ['GET', 'PUT', 'POST', 'DELETE'] };

async function bootstrap() {
  const app = await NestFactory.create(AppModule, null, {
    cors,
  });
  // Sets HTTP headers appropriately
  app.use(helmet());

  // Protects from CSRF/XSRF attacks
  // app.use(csurf());

  // Limits requests number per seconds
  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000,
      max: 200,
    }),
  );

  // Activates validations response through librarys
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
