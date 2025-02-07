import { Body, Controller, Post } from '@nestjs/common';
import { CalculateBmiDto } from './dto/calculate-bmi.dto';  // Sprawdź, czy DTO jest zaimportowane
import { BmiService } from './bmi.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('BMI')  
@Controller('calculate-bmi')
export class BmiController {
  constructor(private readonly bmiService: BmiService) {}

  @Post()
  @ApiOperation({ summary: 'Oblicz BMI' })
  calculateBmi(@Body() calculateBmiDto: CalculateBmiDto) {
    return this.bmiService.calculateBmi(calculateBmiDto);
  }
  
}
