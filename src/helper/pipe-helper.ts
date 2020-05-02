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



export const CurrentUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    },
);

export class FilterPipe implements PipeTransform {

    transform(value: any) {

    }
}