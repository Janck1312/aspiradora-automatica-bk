import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = new ConfigService();
    const config = new DocumentBuilder()
        .setTitle("Aspirador automatica - bk")
        .setDescription("API de trabajo para la App Movil")
        .setVersion('1.0')
        .build();
    if (!configService.get("API_PORT") || configService.get("API_PORT") == '') throw new Error("API PORT NOT DEFINED");
    app.useGlobalPipes(new ValidationPipe());
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(configService.get('API_PREFIX'), app, documentFactory);
    await app.listen(configService.get("API_PORT"));
}
bootstrap();
