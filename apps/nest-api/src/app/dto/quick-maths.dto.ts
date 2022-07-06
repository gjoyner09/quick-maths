import { IsNumber, IsNotEmpty } from 'class-validator';

export class QuickMathsDto {
  @IsNotEmpty()
  @IsNumber()
  readonly numberOne: number;

  @IsNotEmpty()
  @IsNumber()
  readonly numberTwo: number;
}
