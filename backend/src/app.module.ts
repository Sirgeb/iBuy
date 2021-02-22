import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import Joi from 'joi';
import { getMetadataArgsStorage } from 'typeorm';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from './mail/mail.module';
import { JwtModule } from './jwt/jwt.module';
import { AuthModule } from './auth/auth.module';
import { UploadsModule } from './uploads/uploads.module';
import { PaymentsModule } from './payments/payments.module';
import { ShopsModule } from './shops/shops.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CartModule } from './cart/cart.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('dev', 'production', 'test')
          .required(),
        DATABASE_URL: Joi.string(),
        PRIVATE_KEY: Joi.string().required(),
        MAILGUN_API_KEY: Joi.string().required(),
        MAILGUN_DOMAIN_NAME: Joi.string().required(),
        MAILGUN_FROM_EMAIL: Joi.string().required(),
        S_CLIENT_ID: Joi.string().required(),
        S_SECRET_KEY: Joi.string().required()
      })
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: process.env.NODE_ENV !== 'production',
      ssl : {
        rejectUnauthorized: false
      },
      logging:
        process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target)
    }), 
    GraphQLModule.forRoot({
      playground: process.env.NODE_ENV !== 'production', 
      installSubscriptionHandlers: true, 
      autoSchemaFile: true,
      context: ({ req, connection }) => {
        const TOKEN_KEY = 'x-jwt';
        return {
          token: req ? req.headers[TOKEN_KEY] : connection.context[TOKEN_KEY],
        };
      },
    }),
    UsersModule,
    CommonModule,
    MailModule.forRoot({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN_NAME
    }),
    JwtModule.forRoot({
      privateKey: process.env.PRIVATE_KEY
    }),
    AuthModule,
    UploadsModule.forRoot({
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      cloudName: process.env.CLOUDINARY_NAME
    }),
    PaymentsModule.forRoot({
      s_client_id: process.env.S_CLIENT_ID,
      s_secret_key: process.env.S_SECRET_KEY
    }),
    ShopsModule,
    WishlistModule,
    CartModule,
    ItemsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
