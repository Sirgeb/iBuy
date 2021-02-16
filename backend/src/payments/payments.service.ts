import { Inject, Injectable } from '@nestjs/common';
import stripe from 'stripe';
import { CONFIG_OPTIONS } from 'src/common/common.constants';
import { PaymentsModuleOptions } from './payment.interfaces';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: PaymentsModuleOptions
  ){}

  client() {
    return new stripe(this.options.s_secret_key)
  }

  async connect(code: string) {
    const response = await this.client().oauth.token({
      grant_type: "authorization_code",
      code
    });

    return response;
  }

  async disconnect(stripeUserId: string) {
    //@ts-ignore
    const response = await this.client().oauth.deauthorize({
      client_id: this.options.s_client_id,
      stripe_user_id: stripeUserId
    }); 

    return response;
  }

  async charge(amount: number, source: string, stripeAccount: string) {
    const res = await this.client().charges.create(
      {
        amount,
        currency: "usd",
        source,
        application_fee_amount: Math.round(amount * 0.05)
      },
      {
        stripe_account: stripeAccount
      }
    );

    if (res.status !== "succeeded") {
      throw new Error("failed to create charge with Stripe");
    }
  }
}
