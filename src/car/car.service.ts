import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './car.interface';
import { responseError } from 'src/helper/response-helper';
import { CreateCarDto } from './dto/create-car.dto'
import { UpdateCarDto } from './dto/update-car.dto';
import { DeleteDto } from 'src/helper/delete-dto-helper';

@Injectable()
export class CarService {
    constructor(
        @InjectModel('Car') private readonly carModel: Model<Car>
    ) { }

    async getCars(): Promise<Car[]> {
        try {
            const cars = await this.carModel.find({})
            return cars
        } catch (error) {
            return responseError(error.message, HttpStatus.NOT_IMPLEMENTED)

        }
    }
    async createCar(newCar: CreateCarDto): Promise<Car> {
        const _newCar = this.carModel(newCar)
        try {
            await _newCar.save()
            return _newCar
        } catch (error) {
            return responseError(error.message, HttpStatus.NOT_IMPLEMENTED)
        }
    }
    async updateCar(_id: string, carUpdate: UpdateCarDto | DeleteDto): Promise<Car> {
        try {

            const car = await this.carModel.findById(_id)
            for (const key in carUpdate) {
                car[key] = carUpdate[key]
            }

            await car.save()
            return car

        } catch (error) {
            return responseError(error.message, HttpStatus.UNPROCESSABLE_ENTITY)
        }
    }

    
}
