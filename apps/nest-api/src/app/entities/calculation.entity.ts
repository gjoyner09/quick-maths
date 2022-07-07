import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CalculationEntity {
  @Expose()
  result: number;

  constructor(result: number) {
    this.result = result;
  }
}
