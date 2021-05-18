import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import configuration, { NODE_ENV } from '../config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      load: [configuration],
    }),
    GraphQLModule.forRoot({
      debug: process.env.NODE_ENV == NODE_ENV.Development,
      playground: process.env.NODE_ENV == NODE_ENV.Development,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
