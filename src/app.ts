import express from 'express';
// import 'config/db';
import { connectDB } from './config/db';
import userRouter from './router/User.router';
import ticketRouter from './router/Ticket.router';
import ticketAdminRouter from './router/EventByAdmin.router';
import 'dotenv/config';
connectDB();
import cors from 'cors';


const app = express();
app.use(express.json())
// const port = 3000;
app.use(cors());

app.use('/api/v1/auth',userRouter);
app.use('/api/v1/ticket',ticketRouter);
app.use('/api/v1/ticketAdmin',ticketAdminRouter);

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`Server is ${port}`)
})
