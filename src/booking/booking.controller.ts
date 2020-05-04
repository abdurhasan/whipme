import { Controller, Get } from '@nestjs/common';
import { BookingService } from './booking.service';
import { responseError, responseSuccess } from 'src/helper/response-helper';

@Controller('booking')
export class BookingController {
    constructor(private bookingService: BookingService) { }
    @Get()
    async getBookings() {
        try {
            const bookings = await this.bookingService.getBookings();
            return responseSuccess(bookings)
        } catch (error) {
            return responseError(error.message)
        }
    }
}
