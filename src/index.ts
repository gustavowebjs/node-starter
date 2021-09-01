import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { getUsers, storeUser } from './api/controllers/UserController';

const app = express();

app.use(express.json(), express.urlencoded(), cors());

const port = process.env.PORT || 3333; // default port to listen

// create database connection

// eslint-disable-next-line no-unused-expressions
createConnection();

app.post('/users', storeUser);
app.get('/users', getUsers);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// start server
app.listen(port, () => {
  console.log('Your api is working on http://localhost:3333 port!');
});
