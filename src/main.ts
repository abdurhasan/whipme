import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import * as helmet from 'helmet';

async function bootstrap() {
  const serverConfig = config.get('server');
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors({ origin: serverConfig.origin });
    app.use(helmet())
  }

  await app.listen(serverConfig.port);
}
bootstrap();



// if (process.env.NODE_ENV === 'development') {
//   app.enableCors();
// } else {
//   app.enableCors({ origin: serverConfig.origin });
//   logger.log(`Accepting requests from origin "${serverConfig.origin}"`);
// }

// const port = process.env.PORT || serverConfig.port;
// await app.listen(port);