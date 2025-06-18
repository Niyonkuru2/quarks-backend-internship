import express from 'express'
import { useRouter } from './routes/userRoutes.js';
const app = express();
app.use(express.json()); // Allowing Json Body parsing

//Routes
app.use('/users',useRouter)
//Get mesage from server of success running on browser get  
app.get('/',(req,res)=>{
    res.send('Express server is Running')
})

//Global fallback for unmatched routes
app.use((req,res)=>{
    res.status(404).json({success:false,message:"Route Not Found"});
})

export default  app;
