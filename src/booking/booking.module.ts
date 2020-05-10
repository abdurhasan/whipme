import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingSchema } from './booking.schema';
import { BranchModule } from 'src/branch/branch.module';
import { CarModule } from 'src/car/car.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Booking', schema: BookingSchema }]),
    UserModule,
    BranchModule,
    CarModule
  ],
  exports: [MongooseModule],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule { }
