import 'dotenv/config';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { GlobalExceptionFilter } from './common/filters/exception.filter';
import { cwd } from 'process';
import cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // ← this throws 422 if unknown field is sent
      transform: true,
      errorHttpStatusCode: 422,
    }),
  );
  // serve uploaded files
  // __dirname  points to dist/ (bad after build)
  // cwd        always points to project root (good)
  app.useStaticAssets(join(cwd(), 'uploads'), {
    prefix: '/uploads',
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();