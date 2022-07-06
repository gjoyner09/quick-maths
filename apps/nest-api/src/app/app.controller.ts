import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { QuickMathsDto } from './dto/quick-maths.dto';
// import { Values } from './interfaces/values.interface'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Body() quickMathsDto: QuickMathsDto): string {
    return this.appService.getData(
      quickMathsDto.numberOne,
      quickMathsDto.numberTwo
    );
    // return `${quickMathsDto.numberOne} + ${quickMathsDto.numberTwo} = ${sum}`;
    // return this.appService.getData();
  }
}
