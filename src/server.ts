import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { routes } from './routes/web';

const app = express();

app.use(express.json(), express.urlencoded(), cors());

const port = process.env.PORT || 3333; // default port to listen

// create database connection
createConnection();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(routes);
// start server
app.listen(port, () => {
  console.log('Your api is working on http://localhost:3333 port!');
});
