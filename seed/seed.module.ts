import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from 'src/user/user.module';
// import { AppModule } from 'src/app.module';


@Module({
  imports: [
    MongooseModule.forRoot(dbConfig.uri, { useNewUrlParser: true, useUnifiedTopology: true }),
  ],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule { }
