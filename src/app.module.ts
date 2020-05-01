import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as config from 'config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/auth.guard';
import { CarModule } from './car/car.module';


const dbConfig = config.get('db');

@Module({
  imports: [
    MongooseModule.forRoot(dbConfig.uri, { useNewUrlParser: true, useUnifiedTopology: true }),
    AuthModule,
    UserModule,
    BookingModule,
    CarModule
  ],
  controllers: [],
  providers: [   
    {provide:APP_GUARD, useClass: RolesGuard} 
  ],
})
export class AppModule { }
