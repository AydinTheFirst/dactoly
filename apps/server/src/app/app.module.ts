import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';

import { AwsModule, NetgsmModule } from '~/common/modules';
import { multerConfig, throttlerConfig } from '~/config';
import { PrismaModule } from '~/database';
import { GatewaysModule } from '~/gateways/gateways.module';
import modules from '~/modules';

import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [
    ...modules,
    PrismaModule,
    GatewaysModule,
    AwsModule.forRoot(),
    NetgsmModule.forRoot(),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot(throttlerConfig),
    MulterModule.register(multerConfig),
  ],
  providers: [],
})
export class AppModule {}
