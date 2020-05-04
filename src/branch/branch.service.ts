import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBranchDto } from './dto/create-branch.dto';
import { Branch } from './interface/branch.interface';




@Injectable()
export class BranchService {
    constructor(
        @InjectModel('Branch') private readonly branchModel: Model<Branch>
    ) { }
    async createBranch(newCar: CreateBranchDto): Promise<Branch> {
        const createdCar = new this.branchModel(newCar)
        await createdCar.save()
        return createdCar
    }
    async getBranchs(): Promise<Branch[]> {
        const branch = await this.branchModel.find({}).populate('technicians','userName email fullName phone')
        return branch
    }
    async getBranchById(branchId: string): Promise<Branch> {
        const branchById = await this.branchModel.findById(branchId)
        return branchById
    }

    async getAvailableTechnician() {

    }
    // async updateBranch(_id: string, carUpdate: UpdateCarDto | DeleteDto): Promise<Car> {
    //     const car = await this.branchModel.findById(_id)

    //     if (!car) {
    //         throw new Error(`Car with id : ${_id} is not found`)
    //     }

    //     for (const key in carUpdate) {
    //         car[key] = carUpdate[key]
    //     }

    //     await car.save()
    //     return car
    // }


}
