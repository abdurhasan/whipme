import { PipeTransform, BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as IsEmpty from 'is-empty'

export class IsNotEmptyPipe implements PipeTransform {

    transform(value: any) {
        if (IsEmpty(value)) {
            throw new BadRequestException(`value can not be empty`);
        }

        return value
    }

}

export const SlugStringList: string[] = ['numberPlate']



export class SlugString implements PipeTransform {

    transform(value: object) {
        for (const key in value) {
            if (SlugStringList.includes(key)) {
                console.log(value[key])
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
