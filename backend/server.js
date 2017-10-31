import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './api/routes/route';
import bodyParser from 'body-parser'

mongoose.connect('mongodb://localhost/GymApp');

const app = express();

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/v1', router);

const port = process.env.PORT || 3000;

app.listen(port);

console.log('gym app RESTful API server started on: ' + port);