import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import * as helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const serverConfig = config.get('server')
  const app = await NestFactory.create(AppModule)
  const bearerToken = require('express-bearer-token')

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors({ origin: serverConfig.origin });
    app.use(helmet())
  }

  app.useGlobalPipes(new ValidationPipe());
  app.use(bearerToken())

  await app.listen(serverConfig.port);
}
bootstrap();

