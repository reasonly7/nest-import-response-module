import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { ResponseData } from './response/ResponseData';

@Controller()
export class AppController {
  @Get('hello')
  sayHello() {
    return 'Hello, World!';
  }

  @Get('hi')
  sayHi() {
    throw new InternalServerErrorException('hi');
  }

  @Get('yo')
  yo() {
    return new ResponseData('yo', 'Yhoooo', 2020);
  }
}
