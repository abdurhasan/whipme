import { Controller, Get, Post, Body, Patch, Param, UsePipes, ValidationPipe, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { Car } from './car.interface'
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto'
import { IsNotEmptyPipe } from 'src/helper/pipe-helper';
import { UpdateCarDto } from './dto/update-car.dto';
import { DeleteDto } from 'src/helper/delete-dto-helper';
import { GetUsersFilterDto } from 'src/user/dto/filter-user.dto';
import { responseSuccess, responseError } from 'src/helper/response-helper';
@Controller('car')
@UsePipes(ValidationPipe)
export class CarController {
    constructor(private readonly carService: CarService) { }

    @Get()
    async getCars(
        @Query() userFilter: GetUsersFilterDto
    ) {
        try {
            const cars = await this.carService.getCars(userFilter);
            return responseSuccess(cars)
        } catch (error) {
            return responseError(error.message)
        }
    }
    @Post()
    async createUser(@Body() newCar: CreateCarDto) {
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
