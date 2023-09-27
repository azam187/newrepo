import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
require('dotenv').config();





import * as middlewares from './middlewares/validators';
import userRouter from './api/router/user';
import adminRouter from './api/router/admin';
import userDetailsRouter from './api/router/userDetails';
import categoryRouter from './api/router/category';
import courseRouter from './api/router/course';
import DataResponse from './api/interfaces/DataResponse';
// import { dbConnect } from './db';


const port =8080;

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());



app.get<{}, DataResponse>('/home', (req, res) => {
  return res.json({
    message: 'Baby I love you, I cherish every moment we spend together,.My love for you grows stronger with each passing day.!!',
  });
});


// app.use('/user', userRouter);
// app.use('/admin', adminRouter);
// app.use('/userdetail', userDetailsRouter);
// app.use('/category', categoryRouter);
// app.use('/course', courseRouter);

// app.use(middlewares.apiNotFound);
// app.use(middlewares.errorHandler);



app.listen(port, () => {  
  console.log(`Successfully server running at : http://localhost:${port}`);
});
