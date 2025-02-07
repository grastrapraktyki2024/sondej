import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CalculateBmiDto } from './dto/calculate-bmi.dto';
import { BmiLog, BmiLogDocument } from './bmi-log.schema';  // Mongoose schema

@Injectable()
export class BmiService {
  constructor(
    @InjectModel(BmiLog.name) private readonly bmiLogModel: Model<BmiLogDocument>,
  ) {}

  calculateBmi(calculateBmiDto: CalculateBmiDto) {
    const { weight, height } = calculateBmiDto;
    
    // Walidacja danych wejściowych
    if (!weight || !height || weight <= 0 || height <= 0) {
      throw new Error('Waga i wzrost muszą być liczbami dodatnimi');
    }

    // Obliczanie BMI
    const bmi = weight / ((height / 100) ** 2);
    if (isNaN(bmi)) {
      throw new Error('Obliczona wartość BMI jest nieprawidłowa');
    }

    // Logowanie do bazy danych
    const bmiLog = new this.bmiLogModel({
      weight,
      height,
      bmi,
      date: new Date(),
    });

    bmiLog.save().catch(err => {
      console.error('Błąd podczas zapisywania logu BMI:', err);
    });

    return { bmi };
  }
}
