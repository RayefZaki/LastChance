import express from 'express';
// import 'config/db';
import { connectDB } from './config/db';
import userRouter from './router/User.router';
import ticketRouter from './router/Ticket.router';
import 'dotenv/config';
connectDB();
import cors from 'cors';


const app = express();
app.use(express.json())
// const port = 3000;
app.use(cors());

app.use('/api/v1/auth',userRouter);
app.use('/api/v1/ticket',ticketRouter);

const port = process.env.port || 5000;
app.listen(port,()=>{
    console.log(`Server is ${port}`)
})
