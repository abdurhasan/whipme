import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from './car.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }])
  ],
  exports: [MongooseModule,CarService],
  controllers: [CarController],
  BranchDummyrs: [CarService]
})
export class CarModule { }
