import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors())
dotenv.config()

app.get('/',(req,res)=>{
    res.send("Hello from Server");
})

app.listen(PORT, ()=>{
    console.log(`Servr Running at ${PORT}`);
})