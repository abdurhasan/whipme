import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppModule } from 'src/app.module';


@Module({
  imports: [
    AppModule
  ],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule { }
