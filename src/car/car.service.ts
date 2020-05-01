import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './car.interface';
import { responseError } from 'src/helper/response-helper';

@Injectable()
export class CarService {
    constructor(
        @InjectModel('Car') private readonly carModel: Model<Car>
    ) { }

    async getCars() {
        try {
            const users = await this.carModel.find({})
            return users
        } catch (error) {
            return responseError(error.message, HttpStatus.NOT_IMPLEMENTED)

        }
    }
}
