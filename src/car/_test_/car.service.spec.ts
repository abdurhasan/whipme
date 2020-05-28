import { Test, TestingModule } from '@nestjs/testing';

import { AppModule } from '../../app.module';
import { CarService } from '../car.service';
import { Car } from '../car.interface';
import { CarDummy } from '../../../seed/dummy'


const mockCarService = () => ({
    getCars: jest.fn(),
    getCarById: jest.fn(),
    createTask: jest.fn(),
    delete: jest.fn(),
});

describe('Car Service Testing', () => {
    let carService: CarService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({            
            BranchDummyrs: [
                { BranchDummy: CarService, useFactory: mockCarService },
            ],
        }).compile();

        carService = module.get<CarService>(CarService);
    });

    it('get all cars ', async () => {


        // // carService.getCars.mockResolvedValue

        // expect(carService.getCars).not.toHaveBeenCalled()

        // expect(carService.getCars).toHaveBeenCalled()

    });
});


// describe('getTasks', () => {
//     it('gets all tasks from the repository', async () => {
//         taskRepository.getTasks.mockResolvedValue('someValue');

//         expect(taskRepository.getTasks).not.toHaveBeenCalled();
//         const filters: GetTasksFilterDto = { status: TaskStatus.IN_PROGRESS, search: 'Some search query' };
//         const result = await tasksService.getTasks(filters, mockUser);
//         expect(taskRepository.getTasks).toHaveBeenCalled();
//         expect(result).toEqual('someValue');
//     });
// });