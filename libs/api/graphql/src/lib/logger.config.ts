import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { utilities, WinstonModuleOptionsFactory } from 'nest-winston';
import { format, LoggerOptions, transports } from 'winston';
import { ApplicationConfigInterface } from '~/types/services/application.config.interface';
// import { SlackTransport } from './slack.transport';
// import { RequestContext } from '@mall/api/middleware';

// const myFormat = format.printf(({ level, message, label, timestamp }) => {
//   return `${timestamp}\t${level}: ${message}`;
// });

const myFormat = format(info => {
  let { timestamp } = info;
  if ('undefined' !== typeof timestamp) {
    try {
      if (timestamp === new Date(timestamp).toISOString()) {
        timestamp = new Date(timestamp).toLocaleString();
      }
    } catch (error) {
      //
    }
  }
  let context;
  try {
    // context = RequestContext.currentRequestContext();
  } catch (error) {
    //
  }
  const trid = context?.id ?? '';
  info.timestamp = `[${trid}] ${timestamp ?? ''}`;
  return info;
})();

@Injectable()
export class WinstonConfig implements WinstonModuleOptionsFactory {
  private readonly APP_CONFIG: ApplicationConfigInterface['APP'];
  private readonly IS_DEBUG: ApplicationConfigInterface['DEBUG'];
  // private transport: SlackTransport;

  constructor(private readonly configService: ConfigService<ApplicationConfigInterface>) {
    this.APP_CONFIG = this.configService.get('APP');
    this.IS_DEBUG = this.configService.get('DEBUG');
    // this.token = this.configService.get('SLACK').TOKEN;
    // this.transport = new SlackTransport({
    //   token: this.token,
    //   isDebug: this.isDebug
    // });
  }

  createWinstonModuleOptions(): LoggerOptions {
    const loggerOptions: LoggerOptions = {
      transports: [
        //this.transport,
        new transports.Console({
          level: process.env.NODE_ENV === 'production' ? 'info' : 'silly',
          format: format.combine(
            format.colorize({ all: true }),
            format.timestamp(),
            myFormat,
            utilities.format.nestLike(this.APP_CONFIG.APP_NAME, { prettyPrint: true }),
          ),
        }),
      ],
      level: 'info',
    };
    return loggerOptions;
  }
}
