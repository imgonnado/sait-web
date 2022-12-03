import { ApolloDriverConfig, ApolloDriverConfigFactory } from '@nestjs/apollo';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { ApplicationConfigInterface } from '~/types/services/application.config.interface';

@Injectable()
export class GqlConfigService implements ApolloDriverConfigFactory {
  private readonly API: ApplicationConfigInterface['API'];
  private IS_DEVELOPMENT: boolean;

  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) readonly logger: Logger,
    private readonly configService: ConfigService<ApplicationConfigInterface>,
  ) {
    this.API = configService.get('API');
    this.IS_DEVELOPMENT = this.configService.get('DEBUG');
  }

  createGqlOptions(): ApolloDriverConfig {
    return {
      path: `/${this.API.GRAPHQL_API_PREFIX}`,
      autoSchemaFile: '~/schema.gql',
      sortSchema: true,
      debug: this.IS_DEVELOPMENT,
      playground: this.IS_DEVELOPMENT,
      context: ({ req, res }) => {
        if (req?.body?.operationName != 'IntrospectionQuery') {
          this.logger.info(`QUERY ======= ${req?.body?.operationName}`);
          this.logger.info(`VARS  ======= ${req?.body?.variables ? JSON.stringify(req.body.variables) : 'no vars'}`);
        }
        return { req, res };
      },
      formatError: (error: any) => {
        if (!(error?.extensions?.exception?.isNotLogging === true)) {
          const logMessage = `----------- GraphQL Error ----------
    PATH - ${error.path}
    MESSAGE - ${error.message}
    CODE - ${error.extensions.code}
    ORIGINAL ERROR --------------------
    ${error.originalError?.stack}`;
          this.logger.error(logMessage);
        }
        return {
          message: error?.message ?? '',
          code: error?.extensions?.['code'] ?? '',
          exceptionInfo: error?.extensions?.['exceptionInfo'] ?? {},
        };
      },
    };
  }
}
