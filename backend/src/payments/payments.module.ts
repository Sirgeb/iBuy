import { DynamicModule, Global, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from 'src/common/common.constants';
import { PaymentsModuleOptions } from './payment.interfaces';
import { PaymentsService } from './payments.service';

@Module({})
@Global()
export class PaymentsModule {
  static forRoot(options: PaymentsModuleOptions): DynamicModule {
    return {
      module: PaymentsModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        PaymentsService,
      ],
      exports: [PaymentsService],
    };
  }
}
