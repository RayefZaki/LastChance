import express from 'express';
// import 'config/db';
import { connectDB } from './config/db';
import userRouter from './router/User.router';
import 'dotenv/config';
connectDB();

const app = express();
app.use(express.json())
// const port = 3000;


app.use('/api/v1/user',userRouter);

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`Server is ${port}`)
})
