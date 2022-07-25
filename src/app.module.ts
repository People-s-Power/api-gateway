import { CacheModule, Inject, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppService } from './app.service';
import config from './utils/config';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EnvModule } from './env/env.module';
import { CampaignModule } from './campaign/campaign.module';
import { TransactionModule } from './transaction/transaction.module';
import { ApplicantModule } from './applicant/applicant.module';
import { ClientsModule, Transport } from  "@nestjs/microservices"
import { View, ViewSchema } from './campaign/schema/campaign.schema';
import { ReportModule } from './report/report.module';
import { OrgsModule } from './orgs/orgs.module';

@Module({

  imports: [
    MongooseModule.forRoot(config.MONGO_URI, {
      // connectionFactory: (connection: Connection) => {
      //   connection.useDb('test');

      //   console.log(connection);
      //   return connection;
      // },
    }),

    ClientsModule.register([
      {
        name: 'MAIL_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [config.RMQ_URL],
          queue: 'mail_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
    MongooseModule.forFeature([{ name: View.name, schema: ViewSchema }]),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      installSubscriptionHandlers: true,
      path: '/graphql',
      cors: false,
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
    }),

    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.register({ ttl: 500 }),

    AuthModule,
    UserModule,
    ApplicantModule,
    CampaignModule,
    TransactionModule,
    EnvModule,
    ReportModule,
    OrgsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
