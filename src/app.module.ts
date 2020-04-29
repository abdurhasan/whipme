import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as config from 'config';

const dbConfig = config.get('db');

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(dbConfig.uri, { useNewUrlParser: true ,useUnifiedTopology: true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
