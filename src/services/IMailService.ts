export interface IMailOptions {
  to: string | string[];
  from: string;
  subject: string;
  body: string;
}

export interface IMailService {
  sendEmail(mail: IMailOptions): Promise<void>;
}
