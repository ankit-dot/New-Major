import express from 'express';
import testRoutes from './routes/testRoute.js'
import { dbconnect } from './config/dbConfig.js';




dbconnect();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.use('/test', testRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log('Example app listening on port 5000!'),
);