import { NodemailerService } from './index';

describe('Nodemailer Service', () => {
  const nodemailerService = new NodemailerService();
  it('should be send email', async () => {
    const email = {
      to: 'teste@teste.com',
      from: 'Jest <jest@test.com>',
      subject: 'JEST - You are ok!',
      body: 'Hello, this is a test email.',
    };

    await nodemailerService.sendEmail(email);
  });

  it('should be return auth SMTP data missing error', () => {
    process.env.EMAIL_HOST_SERVICE = '';
    process.env.EMAIL_HOST_USER = '';
    process.env.EMAIL_HOST_PASSWORD = '';
    process.env.EMAIL_HOST_SERVICE = '';
    process.env.EMAIL_HOST_PORT = '';

    expect(() => {
      new NodemailerService();
    }).toThrow(Error('Auth SMTP data is not provided'));
  });

  it('should be failt on send email', async () => {
    const email = {
      to: '',
      from: 'Jest <jest@test.com>',
      subject: 'JEST - You are ok!',
      body: 'Hello, this is a test email.',
    };

    await expect(nodemailerService.sendEmail(email)).rejects.toThrow(Error);
  });
});
