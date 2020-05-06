import { Controller, Get, Post, Body, Patch, Param, UsePipes, ValidationPipe, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { responseSuccess, responseError } from 'src/helper/response-helper';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/create-branch.dto';
@Controller('branch')
@UsePipes(ValidationPipe)
export class BranchController {
    constructor(private readonly branchService: BranchService) { }

    @Get()
    async getBranchs() {
        try {
            const cars = await this.branchService.getBranchs();
            return responseSuccess(cars)
        } catch (error) {
            return responseError(error.message)
        }
    }
    @Post()
    async createUser(@Body() newBranch: CreateBranchDto) {
        try {
            const createdCar = await this.branchService.createBranch(newBranch);
            return responseSuccess(createdCar)
        } catch (error) {
            return responseError(error.message)
        }
    }

    @Get('/:id')
    async getBranchById(
        @Param('id') id: string,
    ) {

        try {
            const branchById = await this.branchService.getBranchById(id)
            return responseSuccess(branchById)
        } catch (error) {
            return responseError(error.message)
        }
    }
    // @Patch('/:id')
    // async updateCar(
    //     @Param('id') id: string,
    //     @Body(IsNotEmptyPipe) carUpdate: UpdateCarDto
    // ) {

    //     try {
    //         const updatedCar = await this.branchService.updateCar(id, carUpdate)
    //         return responseSuccess(updatedCar)
    //     } catch (error) {
    //         return responseError(error.message)
    //     }
    // }

    // @Delete('/:id')
    // async deleteCar(@Param('id') id: string) {
    //     try {
    //         const softDelete: DeleteDto = { isDelete: true }
    //         const deletedCar = await this.branchService.updateCar(id, softDelete);
    //         return deletedCar
    //     } catch (error) {
    //         return responseError(error.message)
    //     }

    // }
}
