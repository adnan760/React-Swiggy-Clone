import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import restaurantData from './db/restaurantsData.js';
import router from './routes/route.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/',router);

app.get('/',(req , res)=>{
  res.send('Hello to swiggy clone');
});

//const CONNECTION_URL = '<database url>';
const PORT = process.env.PORT|| 4000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log('Server Running on Port:',{PORT})))
  .catch((error) => console.log({error},' did not connect'));

restaurantData();