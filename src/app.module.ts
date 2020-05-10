import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/auth.guard';
import { CarModule } from './car/car.module';
import { BranchModule } from './branch/branch.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as config from 'config';
const dbConfig = config.get('db');

@Module({
  imports: [
    MongooseModule.forRoot(dbConfig.uri, { useNewUrlParser: true, useUnifiedTopology: true }),
    AuthModule,
    UserModule,
    BookingModule,
    CarModule,
    BranchModule,
  ],
  controllers: [],
  exports: [
    MongooseModule,
    AuthModule,
    UserModule,
    BookingModule,
    CarModule,
    BranchModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: RolesGuard }
  ],
})
export class AppModule { }
