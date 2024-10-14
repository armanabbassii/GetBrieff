// const express = require('express')
// const bodyParse = require ('body-parser')
// const cors = require ('cors')
// const mailgun = require('mailgun-js')
// const dotenv = require ('dotenv')


// dotenv.config()

// const app = express()

// app.use(bodyParse.urlencoded({ extended:true}))
// app.use(bodyParse.json())

// app.use(cors({
//     origin: 'http://localhost:5173', // Your frontend URL
//     methods: 'POST', // Allow POST requests
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }));





// const mg = mailgun({
//     apiKey:process.env.MAILGUN_API_KEY,
//     domain: process.env.MAILGUN_DOMAIN,
// })

// app.post('/app/email',(req,res)=>{
//     const {email} = req.body;

//     const data = {
//         from: 'neverKnow <arman.abbasi.nt@gmail.com>',
//         to:email,
//         text: 'this email is send your from GetBrief trib'

//     }


//     mg.messages().send(data, (error,body) => {
//         if(error){
//             console.error(error);
//             res.status(500).send('Error in sending email')
//         }else{

//             console.log('email send:', body);
//             res.status(200).send('Email send successfully!');
//         }
//     })
// })
// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });




//...........................................
/*
import dotenv from 'dotenv';
dotenv.config();

import ExpressService from './services/ExpressService.js';
new ExpressService().start();*/