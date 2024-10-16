import {
  Controller,
  Get,
  InternalServerErrorException,
  StreamableFile,
} from '@nestjs/common';
import { ResponseData } from './response/ResponseData';
import { createReadStream } from 'fs';
import { join } from 'path';

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

  @Get('file')
  file() {
    const fileStream = createReadStream(join(__dirname, '..', 'README.md'));
    return new StreamableFile(fileStream);
  }
}
