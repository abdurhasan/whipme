import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { AppModule } from '../app.module';


@Module({
  imports: [AppModule],
  providers: [SeedService],
})
export class SeedModule { }
