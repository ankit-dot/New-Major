import express from 'express';
import testRoutes from './routes/testRoute.js'
import noteRoutes from './routes/noteRoute.js'
import chatRoutes from './routes/chatRoute.js'
import { dbconnect } from './config/dbConfig.js';





dbconnect();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.use('/api', testRoutes);
app.use('/api', noteRoutes);
app.use('/api', chatRoutes)


const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log('Example app listening on port 5000!'),
);