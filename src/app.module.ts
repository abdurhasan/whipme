import { Module } from '@nestjs/common';
// import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { BookingModule } from './booking/booking.module';
import { AuthService } from './auth/auth.service';
import * as config from 'config';
import { AuthController } from './auth/auth.controller';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { BookingService } from './booking/booking.service';
import { BookingController } from './booking/booking.controller';
import { UserModule } from './user/user.module';

const dbConfig = config.get('db');

@Module({
  imports: [
    // UserModule,
    MongooseModule.forRoot(dbConfig.uri, { useNewUrlParser: true, useUnifiedTopology: true }),
    UserModule,
  ],
  controllers: [AuthController, BookingController, UserController],
  providers: [AuthService, BookingService, UserService],
})
export class AppModule { }
