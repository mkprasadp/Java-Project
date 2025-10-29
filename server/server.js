import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connetDB from './src/config/db.js';
import userRoute from './src/Routes/UserRoutes.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors())
dotenv.config()

await connetDB();

app.get('/',(req,res)=>{
    res.send("Hello from Server");
})

app.use('/user',userRoute);

app.listen(PORT, ()=>{
    console.log(`Servr Running at ${PORT}`);
})