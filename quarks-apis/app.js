import express from 'express'
const app = express();
app.use(express.json()); // Allowing Json Body parsing

//Get mesage from server of success running on browser get  
app.get('/',(req,res)=>{
    res.send('Express server is Running')
})

//Global fallback for unmatched routes
app.use((req,res)=>{
    res.status(404).json({success:false,message:"Route Not Found"});
})

export default  app;
