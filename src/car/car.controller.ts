import { Controller, Get, Post, Body, Patch, Param, UsePipes, ValidationPipe, Delete, Query } from '@nestjs/common';
import { Car } from './car.interface'
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto'
import { IsNotEmptyPipe } from 'src/helper/pipe-helper';
import { UpdateCarDto } from './dto/update-car.dto';
import { DeleteDto } from 'src/helper/delete-dto-helper';
import { GetUsersFilterDto } from 'src/user/dto/get-user-filter.dto';
@Controller('car')
@UsePipes(ValidationPipe)
export class CarController {
    constructor(private readonly carService: CarService) { }

    @Get()
    async getCars(
        @Query() userFilter: GetUsersFilterDto
    ): Promise<Car[]> {
        return this.carService.getCars(userFilter);
    }
    @Post()
    async createUser(@Body() newCar: CreateCarDto) {
        return this.carService.createCar(newCar);
    }

    @Patch(':id')
    async updateCar(
        @Param('id') id: string,
        @Body(IsNotEmptyPipe) carUpdate: UpdateCarDto
    ): Promise<Car> {
        return this.carService.updateCar(id, carUpdate)
    }

    @Delete(':id')
    async deleteCar(@Param('id') id: string) {
        const softDelete: DeleteDto = { isDelete: true }
        return this.carService.updateCar(id, softDelete);

    }
}
