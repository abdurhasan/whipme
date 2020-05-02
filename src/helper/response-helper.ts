import { HttpException } from '@nestjs/common'


export const responseError = (message: string, code: number = 422) => {

    return Promise.reject(new HttpException({ success: false, message }, code));
};

export const responseSuccess = (data: object) => {

    return Promise.resolve({
        success: true,
        data
    })
};

