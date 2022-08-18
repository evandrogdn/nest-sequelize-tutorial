import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // defines a global prefix to api
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(new ValidateInputPipe());

  await app.listen(3001);
}
bootstrap();
