import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  add(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo;
  }

  subtract(numberOne: number, numberTwo: number): number {
    return numberOne - numberTwo;
  }
}
