import { Module } from '@nestjs/common';
import { BranchController } from './branch.controller';
import { BranchService } from './branch.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BranchSchema } from './branch.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Branch', schema: BranchSchema }])],
  controllers: [BranchController],
  providers: [BranchService]
})
export class BranchModule { }
