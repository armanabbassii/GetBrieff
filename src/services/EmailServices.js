import nodemailer from 'nodemailer'
import SubscriptionServices from './SubscriptionService.js'

export default class EmailService {
    static TRANSPORTER  = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{
            user: process.env.EMAIL_USER,
            user: process.env.EMAIL_PASS,

        },
        secure: true

    })

    /**
 * Sends an email
 * @param {*} to
 * @param {*} subject
 * @param {*} text 
 * @returns
 */
#sendEmail(to, subject, html) {
    const email = {
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html
    };
    return EmailService.TRANSPORTER.sendMail(email);
  }


  /**
 * Sends a verification email
 * @param {*} emailToVerify
 * @param {*} id
 */
async sendVerificationEmail(emailToVerify, id) {
    const VERIFICATION_HTML = `<h1>Thank you for signing up for the WittCepter newsletter! An amazing Chrome Extension!</h1>
    <p>Please click on the link below to verify your email</p>
    <a href='${process.env.URL}/subscriber/verify?id=${id}&email=${emailToVerify}'>Verify your email</a>`;
    await this.#sendEmail(emailToVerify, 'WittCepter - Verify Your Email', VERIFICATION_HTML);
    console.log('Verification email sent to ' + emailToVerify);
  }

  /**
 * Loops through the subscriber list and sends each email
 * @param {*} subject
 * @param {*} body
 */
async sendBulkEmail(subject, body) {
    console.log('Sending an email to all subscribers');
    await Promise.allSettled(
      SubscriptionService.SUBSCRIBERS.map(s => {
        const bodyWithUnsubscribe = body + `<a href='${process.env.URL}/subscriber/unsubscribe?id=${s.id}&email=${s.email}'>Unsubscribe</a>`;
        return this.#sendEmail(s.email, subject, bodyWithUnsubscribe);
      }));
    console.log('Sent all emails');
  }
}