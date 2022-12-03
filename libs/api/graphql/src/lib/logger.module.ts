import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { WinstonConfig } from './logger.config';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      useClass: WinstonConfig,
    }),
  ],
})
export class LoggerModule {}
