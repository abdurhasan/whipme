import { Controller, Get, Post, Body, Patch, Param, UsePipes, ValidationPipe, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto'
import { IsNotEmptyPipe } from '../helper/pipe-helper';
import { UpdateCarDto } from './dto/update-car.dto';
import { DeleteDto } from '../helper/delete-dto-helper';
import { responseSuccess, responseError } from '../helper/response-helper';
@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService) { }

    @Get()
    async getCars() {
        try {
            const cars = await this.carService.getCars();
            return responseSuccess(cars)
        } catch (error) {
            return responseError(error.message)
        }
    }
    @Post()
    async createCar(@Body() newCar: CreateCarDto) {
        try {
            const createdCar = await this.carService.createCar(newCar);
            return responseSuccess(createdCar)
        } catch (error) {
            return responseError(error.message)
        }
    }

    @Get('/:id')
    async getCarById(
        @Param('id') id: string,
    ) {

        try {
            const carById = await this.carService.getCarById(id)
            return responseSuccess(carById)
        } catch (error) {
            return responseError(error.message)
        }
    }
    @Patch('/:id')
    async updateCar(
        @Param('id') id: string,
        @Body(IsNotEmptyPipe) carUpdate: UpdateCarDto
    ) {

        try {
            const updatedCar = await this.carService.updateCar(id, carUpdate)
            return responseSuccess(updatedCar)
        } catch (error) {
            return responseError(error.message)
        }
    }

    @Delete('/:id')
    async deleteCar(@Param('id') id: string) {
        try {
            const softDelete: DeleteDto = { isDelete: true }
            const deletedCar = await this.carService.updateCar(id, softDelete);
            return deletedCar
        } catch (error) {
            return responseError(error.message)
        }

    }
}
