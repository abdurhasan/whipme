import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { AppModule } from '../src/app.module';



@Module({
  imports: [AppModule],
  BranchDummyrs: [SeedService],
})
export class SeedModule { }
