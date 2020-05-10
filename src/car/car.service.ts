import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { DeleteDto } from '../helper/delete-dto-helper';
import * as IsEmpty from 'is-empty';



@Injectable()
export class CarService {
    constructor(
        @InjectModel('Car') private readonly carModel: Model<Car>
    ) { }

    async getCars(): Promise<Car[]> {
        const cars = await this.carModel.find({})
        return cars
    }
    async getCarById(carId: string): Promise<Car> {
        const carById = await this.carModel.findById(carId)
        return carById
    }
    async findByIdUpsert(_id: string, carDoc?: Car): Promise<Car> {
        try {
            let foundCar: Car = await this.getCarById(_id)

            if (IsEmpty(foundCar)) {
                foundCar = await this.createCar(carDoc)
            }

            return foundCar

        } catch (error) {
            return error
        }


    }
    async createCar(newCar: CreateCarDto): Promise<Car> {
        const createdCar = new this.carModel(newCar)
        await createdCar.save()
        return createdCar
    }
    async updateCar(_id: string, carUpdate: UpdateCarDto | DeleteDto): Promise<Car> {
        const car = await this.carModel.findById(_id)

        if (!car) {
            throw new Error(`Car with id : ${_id} is not found`)
        }

        for (const key in carUpdate) {
            car[key] = carUpdate[key]
        }

        await car.save()
        return car
    }


}
