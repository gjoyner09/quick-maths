import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { QuickMathsDto } from './dto/quick-maths.dto';
import { CalculationEntity } from './entities/calculation.entity';
// import { Values } from './interfaces/values.interface'

@Controller('maths')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/add')
  add(@Body() quickMathsDto: QuickMathsDto): CalculationEntity {
    const sum = this.appService.add(
      quickMathsDto.numberOne,
      quickMathsDto.numberTwo
    );
    return new CalculationEntity(sum);
  }

  @Post('/subtract')
  subtract(@Body() quickMathsDto: QuickMathsDto): CalculationEntity {
    const difference = this.appService.subtract(
      quickMathsDto.numberOne,
      quickMathsDto.numberTwo
    );
    return new CalculationEntity(difference);
  }
}
