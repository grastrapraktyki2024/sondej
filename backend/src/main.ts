import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Konfiguracja Swaggera
  const config = new DocumentBuilder()
    .setTitle('BMI Calculator API')
    .setDescription('API do obliczania BMI')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);  // Endpoint dla Swaggera

  await app.listen(3000);
}
bootstrap();
