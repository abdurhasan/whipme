import { Controller, Get } from '@nestjs/common';

@Controller('booking')
export class BookingController {
    @Get()
    bookingRoot(){
        return 'BOOKING'
    }
}
