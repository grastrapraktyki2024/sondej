import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BmiController } from './bmi/bmi.controller'; // Poprawiona ścieżka
import { BmiService } from './bmi/bmi.service'; // Poprawiona ścieżka
import { BmiLog, BmiLogSchema } from './bmi/bmi-log.schema'; // Poprawiona ścieżka


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/4200'),  // Konfiguracja bazy danych MongoDB
    MongooseModule.forFeature([{ name: BmiLog.name, schema: BmiLogSchema }]),  // Model BmiLog
  ],
  controllers: [BmiController],  // Definicja kontrolera
  providers: [BmiService],  // Definicja serwisu
})
export class AppModule {}  // Eksport klasy AppModule
