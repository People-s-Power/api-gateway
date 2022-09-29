import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
// import { join } from 'path';
import { AppModule } from './app.module';
import { locationLogger } from './middlewares/location.middleware';
import * as cors from 'cors'
// import { LocationMiddleware } from './middlewares/location.middleware';
import config from './utils/config';
// import { RedisIoAdapter } from './utils/redis.io';
import {corsOptions,credentials} from "./cors"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api/v3/')

  
  // app.use(credentials)

  // app.options('*', cors(corsOptions))

  // app.use(cors(corsOptions))
  app.use(cors({
    origin: ['https://peoplespow.com', 'https://www.peoplespow.com', 'http://localhost:3000', ],
    credentials: true,
  }))

  app.use(locationLogger)

  // app.useWebSocketAdapter(new RedisIoAdapter(app)); 
  const PORT = process.env.PORT || 8000;
  app.use(express.json({ limit: '50mb' }));
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => {
    Logger.log(`server started on port ${PORT}`);
  });
}
bootstrap();
