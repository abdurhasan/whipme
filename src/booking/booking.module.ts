import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingSchema } from './booking.schema';
import { BranchModule } from 'src/branch/branch.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Booking', schema: BookingSchema }]), BranchModule],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule { }
