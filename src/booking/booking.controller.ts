import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { BookingService } from './booking.service';
import { responseError, responseSuccess } from 'src/helper/response-helper';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('booking')
@UsePipes(ValidationPipe)
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
    @Post()
    async createBooking(@Body() newBooking: CreateBookingDto) {
        try {
            
            return newBooking

        } catch (error) {
            return responseError(error.message)
        }
    }
}
