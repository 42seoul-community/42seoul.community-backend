import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import packageJson from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('port');

  const config = new DocumentBuilder()
    .setTitle('42seoul.community')
    .setDescription('The 42seoul.community Rest API Document')
    .setVersion(packageJson.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT).then(() => {
    Logger.log(`Server listen port on ${PORT}`, `Bootstrap`);
  });
}

bootstrap();
