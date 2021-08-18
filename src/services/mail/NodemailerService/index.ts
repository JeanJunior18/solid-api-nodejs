import 'dotenv/config';
import { IMailOptions, IMailService } from '../../IMailService';
import nodemailer, { Transporter } from 'nodemailer';

export class NodemailerService implements IMailService {
  private transporter: Transporter;
  private user: string | null = process.env.EMAIL_HOST_USER || null;
  private pass: string | null = process.env.EMAIL_HOST_PASSWORD || null;
  private host: string | null = process.env.EMAIL_HOST_SERVICE || null;
  private port: number | null = Number(process.env.EMAIL_HOST_PORT) || null;

  constructor() {
    if (!this.user || !this.pass || !this.host || !this.port)
      throw new Error('Auth SMTP data is not provided');

    this.transporter = nodemailer.createTransport({
      host: this.host,
      port: this.port,
      auth: {
        user: this.user,
        pass: this.pass,
      },
    });
  }

  async sendEmail(mailOptions: IMailOptions): Promise<void> {
    await new Promise((resolve, reject) => {
      this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) reject(error);
        resolve(info);
      });
    });
  }
}
