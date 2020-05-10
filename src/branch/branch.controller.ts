import { Controller, Get, Post, Body, Patch, Param, UsePipes, ValidationPipe, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { responseSuccess, responseError } from '../helper/response-helper';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/create-branch.dto';
@Controller('branch')
export class BranchController {
    constructor(private readonly branchService: BranchService) { }

    @Get()
    async getBranchs() {
        try {
            const cars = await this.branchService.getBranchs();
            return responseSuccess(cars)
        } catch (error) {
            return responseError(error)
        }
    }
    @Post()
    async createUser(@Body() newBranch: CreateBranchDto) {
        try {
            const createdCar = await this.branchService.createBranch(newBranch);
            return responseSuccess(createdCar)
        } catch (error) {
            return responseError(error)
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
            return responseError(error)
        }
    }

    @Post('/assignTechnician')
    async assignTechnician(
        @Body() signTechnician
    ){  
        try {
            return signTechnician
            // const signedTechnician = await this.branchService.assignTechnician(signTechnician)
            // return responseSuccess(branchById)
        } catch (error) {
            return responseError(error)
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
    //         return responseError(error)
    //     }
    // }

    // @Delete('/:id')
    // async deleteCar(@Param('id') id: string) {
    //     try {
    //         const softDelete: DeleteDto = { isDelete: true }
    //         const deletedCar = await this.branchService.updateCar(id, softDelete);
    //         return deletedCar
    //     } catch (error) {
    //         return responseError(error)
    //     }

    // }
}
