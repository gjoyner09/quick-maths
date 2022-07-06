import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(numberOne, numberTwo): string {
    const sum = numberOne + numberTwo;
    return `${numberOne} + ${numberTwo} = ${sum}`;
  }
}
