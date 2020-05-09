import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  getHello(): string {
    return 'Hello World!';
  }
}
