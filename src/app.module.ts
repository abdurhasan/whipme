import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/auth.guard';
import { CarModule } from './car/car.module';
import { BranchModule } from './branch/branch.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule,
    BookingModule,
    CarModule,
    BranchModule,
    

  ],
  controllers: [],
  providers: [
    { provide: APP_GUARD, useClass: RolesGuard }
  ],
})
export class AppModule { }
