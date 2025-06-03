import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips non-whitelisted properties
      transform: true, // automatically transform payloads
      forbidNonWhitelisted: true, // throw error if non-whitelisted properties are present
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
