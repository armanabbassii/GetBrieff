// import EmailService from './EmailServices.js';
// import {randomUUID} from 'crypto';

// export default class  SubscriptionService extends EmailService {
//   static SUBSCRIBERS = [];
//   static PENDING_SUBSCRIBERS = [];
  
//   /**
//    * Adds an email address to the subscribers list.
//    * Each user is represented by their id.
//    * @param {*} email
//    * @returns
//    */
//   async subscribe(email) {
//     // First check if the user already exists
//     const subscriber = SubscriptionService.PENDING_SUBSCRIBERS.concat(SubscriptionService.SUBSCRIBERS).find(s => s.email === email);
//     if (subscriber) {
//       console.log('Subscriber already exists');
//       return;
//     }
//     console.log('Subscriber does not exist');
//     // Generate an ID
//     const id = randomUUID();
//     const newSubscriber = {
//       id,
//       email
//     };
//     await this.sendVerificationEmail(email, id);
//     SubscriptionService.PENDING_SUBSCRIBERS.push(newSubscriber);
//   }


//   /**
//  * Unsubscribe a subscriber from the email list
//  * @param {*} id
//  * @param {*} email
//  */
// unsubscribe(id, email) {
//     const subsciber = SubscriptionService.SUBSCRIBERS.find(s => (s.id === id && s.email === email));
//     if (!subsciber) {
//       console.log('Subscriber not unsubscribed', id, email);
//     } else {
//       console.log('Subscriber unsubscribed', id, email);
//       SubscriptionService.SUBSCRIBERS = SubscriptionService.SUBSCRIBERS.filter(s => s.id !== id);
//     }
//   }

//   /**
//  * Verify a subscriber by their ID. If the ID is present inside the PENDING_SUBSCRIBERS
//  * then the subscriber is added to the SUBSCRIBERS list.
//  * @param {*} id
//  * @param {*} email
//  * @returns
//  */
// verifySubscriber(id, email) {
//     const subsciber = SubscriptionService.PENDING_SUBSCRIBERS.find(s => (s.id === id && s.email === email));
//     if (!subsciber) {
//       console.log('Subscriber not verified', id, email);
//     } else {
//       console.log('Subscriber verified', id, email);
//       SubscriptionService.SUBSCRIBERS.push(subsciber);
//       SubscriptionService.PENDING_SUBSCRIBERS = SubscriptionService.PENDING_SUBSCRIBERS.filter(s => (s.id !== id && s.email !== email));
//     }
//     return subsciber;
//   }
// }