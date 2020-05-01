import { PipeTransform, BadRequestException } from '@nestjs/common';
import * as IsEmpty from 'is-empty'

export class IsNotEmptyPipe implements PipeTransform {

    transform(value: any) {
        if (IsEmpty(value)) {
            throw new BadRequestException(`value can not be empty`);
        }

        return value
    }

}
