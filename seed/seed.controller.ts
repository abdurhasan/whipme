import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller()
export class SeedController {
  constructor(private readonly appService: SeedService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
