import { Controller, Post } from '@nestjs/common';

@Controller('booking')
export class BookingController {

    @Post()
    bookingHome() {
        return { dor: true }
    }
}
