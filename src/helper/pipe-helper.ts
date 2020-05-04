import { PipeTransform, BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { registerDecorator, ValidationOptions } from "class-validator";
import * as IsEmpty from 'is-empty'
import * as moment from 'moment'

export class IsNotEmptyPipe implements PipeTransform {

    transform(value: any) {
        if (IsEmpty(value)) {
            throw new BadRequestException(`value can not be empty`);
        }

        return value
    }

}

export const SlugStringList: string[] = ['numberPlate'] // Make slugString pipes re-usable



export class SlugString implements PipeTransform {

    transform(value: object) {
        for (const key in value) {
            if (SlugStringList.includes(key)) {
                value[key] = value[key].trim().toUpperCase().replace(/[ ,.]/g, "-")
            }
        }
        return value
    }

}



export const CurrentUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    },
);




export function IsBookingDate(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "isBookingDate",
            target: object.constructor,
            propertyName: propertyName,            
            options: validationOptions,
            validator: {
                validate(value: any) {
                    
                    return moment(value ,"DD-MM-YYYY").isValid()
                }
            }
        });
    };
}