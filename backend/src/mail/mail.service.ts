import { Inject, Injectable } from '@nestjs/common';
import Mailgun from 'mailgun-js';
import { CONFIG_OPTIONS } from 'src/common/common.constants';
import { MailModuleOptions } from './mail.interfaces';

@Injectable()
export class MailService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: MailModuleOptions
  ){}

  mailGunClient(emailData) {
    const mailGunClient = new Mailgun({
      apiKey: this.options.apiKey,
      domain: this.options.domain
    });
    
    return mailGunClient.messages().send(emailData);
  }

  sendEmail(subject: string, html: string) {
    const emailData = {
      from: "chybesta@gmail.com",
      to: "chybesta@gmail.com",
      subject,
      html
    };
    return this.mailGunClient(emailData);
  };
  
  sendVerificationEmail(username: string, key: string) {
    const emailSubject = `Hello! ${username}, please verify your email`;
    const emailBody = `Verify your email by clicking <a href="http://localhost:3000/verification/${key}/">here</a>`;
    return this.sendEmail(emailSubject, emailBody);
  };
}
