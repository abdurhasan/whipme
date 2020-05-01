import { HttpException, UnprocessableEntityException } from '@nestjs/common'


export const responseError = (message: string, code: number = 422) => {

    return Promise.reject(new HttpException({ success: false, message }, code));
};

// export const response = (data: any, code: number = 200) => {    
//     return Promise.resolve({ success: true, ...data, code })
// };

