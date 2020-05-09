import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as config from 'config';
import { CarSchema } from 'src/car/car.schema';
const dbConfig = config.get('db');


@Module({

    imports: [
        MongooseModule.forRoot(dbConfig.uri, { useNewUrlParser: true, useUnifiedTopology: true }),
        MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }])
    ],
    exports: [MongooseModule]


})
export class DatabaseModule { }
