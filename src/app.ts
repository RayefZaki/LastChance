import express from 'express';
// import 'config/db';
import { connectDB } from './config/db';
import userRouter from './router/User.router';
import ticketRouter from './router/Ticket.router';
import ticketAdminRouter from './router/TicketAdmin.router';
import 'dotenv/config';
connectDB();

const app = express();
app.use(express.json())
// const port = 3000;


app.use('/api/v1/auth',userRouter);
app.use('/api/v2/ticket',ticketRouter);
app.use('/api/v3/ticketAdmin',ticketAdminRouter);
const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`Server is ${port}`)
})
