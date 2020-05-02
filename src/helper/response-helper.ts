import { HttpException } from '@nestjs/common'


export const responseError = (message: string, statusCode: number = 422) => {

    return Promise.reject(new HttpException({ success: false, message ,statusCode}, statusCode));
    // return new HttpException({ success: false, message }, code)
};


export const responseSuccess = (data: object | object[]) => {

    return Promise.resolve({
        success: true,
        data
    })
};

