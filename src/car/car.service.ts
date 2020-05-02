import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './car.interface';
import { CreateCarDto } from './dto/create-car.dto'
import { UpdateCarDto } from './dto/update-car.dto';
import { DeleteDto } from 'src/helper/delete-dto-helper';
import { GetUsersFilterDto } from 'src/user/dto/filter-user.dto';



@Injectable()
export class CarService {
    constructor(
        @InjectModel('Car') private readonly carModel: Model<Car>
    ) { }

    async getCars(userFilter: GetUsersFilterDto): Promise<Car[]> {
        const select: string = userFilter.select ? userFilter.select.replace(/[ ,.]/g, " ") : ''
        if (select) delete userFilter.select

        const cars = await this.carModel.find(userFilter).select(select)
        return cars
    }
    async getCarById(carId: string): Promise<Car> {
        const carById = await this.carModel.findById(carId)
        return carById
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
