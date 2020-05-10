import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { Logger } from '@nestjs/common';
import { SeedService } from './seed.service';

async function bootstrap() {
  
  NestFactory.createApplicationContext(SeedModule)
    .then(appContext => {
      const logger = new Logger('Seed');
      const seeder = appContext.get(SeedService);
      seeder
        .seed()
        .then(() => {
          logger.debug('Seeding complete!');
        })
        .catch(error => {
          logger.error('Seeding failed!');
          throw error;
        })
        .finally(() => appContext.close());
    })
    .catch(error => {
      throw error;
    });
}
bootstrap();


