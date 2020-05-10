import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as config from 'config';
const dbConfig = config.get('db');


@Module({

    imports: [
        MongooseModule.forRoot(dbConfig.uri, { useNewUrlParser: true, useUnifiedTopology: true })        
    ],
    exports: [MongooseModule]


})
export class DatabaseModule { }
