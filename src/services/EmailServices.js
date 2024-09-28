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
}