// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) => ({
//         type: 'mysql',
//         // host: configService.get('HOST'),
//         // port: configService.get<number>('PORT'),
//         // username: configService.get('USERNAME'),
//         // password: configService.get('PASSWORD'),
//         // database: configService.get('DATABASE'),
//         // autoLoadEntities: true,
//         // synchronize: true,
//         // logging: true,
//         entities: ['./entities/**/*.entity{.ts,.js}'],
//       }),
//       inject: [ConfigService],
//     }),
//   ],
// })
// export class DatabaseModule {}
