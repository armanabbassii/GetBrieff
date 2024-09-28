import express from 'express';
import SubscriptionService from './SubscriptionService';
import EmailService from './EmailServices';

export default class ExpressService {
  static PORT = process.env.PORT;
  static NODE_ENV = process.env.NODE_ENV;

  #app;
  #subscribeRouter;

  constructor() {
    this.#app = express();
    this.#subscribeRouter = express.Router();
  }

  #initialize() {
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({extended: true}));
    this.#app.use('/subscriber', this.#subscribeRouter);
  }

  #addLoggingMiddleware() {
    this.#app.use((req, res, next) => {
      console.log(`${req.method} ${req.path}`, req.body);
      console.log('VERIFIED', SubscriptionService.SUBSCRIBERS);
      console.log('PENDING', SubscriptionService.PENDING_SUBSCRIBERS);
      return next();
    });
  }


  /**
 * Adds a subscriber to the pending subscribers. The email used to register
 * is then sent an email for verification.
 */
#addSubscribeRoute() {
    this.#subscribeRouter.post('/add', async (req, res, next) => {
      try {
        const {email} = req.body;
        if (!email) {
          return res.status(400).send('Invalid request');
        }
        const subscriptionService = new SubscriptionService();
        await subscriptionService.subscribe(email);
        return res.status(200).send('Please verify your email');
      } catch (err) {
        console.error('Erorr adding subscriber', err);
        return next(err);
      }
    });
  }

  /**
 * Add a route to unsubscribe a user from the email list
 */
#addUnsubscribeRoute() {
    this.#subscribeRouter.get('/unsubscribe', async (req, res, next) => {
      try {
        const {id, email} = req.query;
        if (!id || !email) {
          return res.status(400).send('Invalid request');
        }
        const subscriptionService = new SubscriptionService();
        subscriptionService.unsubscribe(id, email);
        return res.status(200).send('Unsubscribed');
      } catch (err) {
        console.error('Erorr unsubscribing', err);
        return next(err);
      }
    });
  }

  /**
 * Add a route to verify the user's email
 */
#addVerifyRoute() {
    this.#subscribeRouter.get('/verify', async (req, res, next) => {
      try {
        const {id, email} = req.query;
        if (!id || !email) {
          return res.status(400).send('Invalid request');
        }
        const subscriptionService = new SubscriptionService();
        await subscriptionService.verifySubscriber(id, email);
        return res.status(200).send('Verified');
      } catch (err) {
        console.error('Erorr verifying', err);
        return next(err);
      }
    });
  }

  /**
 * Add a route to send an email to all the subscribers
 */
#addSendEmailRoute() {
    this.#subscribeRouter.post('/send', async (req, res, next) => {
      try {
        const {body, subject, password} = req.body;
        if (!body || !subject || !password) {
          return res.status(404).send('Not found');
        }
        if (password !== process.env.PASSWORD) {
          return res.status(404).send('Not found');
        }
        const emailService = new EmailService(); 
        await emailService.sendBulkEmail(subject, body);
        return res.status(200).send('Emails sent to subscribers');
      } catch (err) {
        console.error('Erorr sending email', err);
        return next(err);
      }
    });
  }


  start() {
    this.#initialize();
    this.#addLoggingMiddleware();
    this.#addSubscribeRoute();
    this.#addUnsubscribeRoute();
    this.#addVerifyRoute();
    this.#addSendEmailRoute();
    this.#app.listen(ExpressService.PORT, () => {
      console.log(`Server running on port ${ExpressService.PORT}`);
    });
  }
}