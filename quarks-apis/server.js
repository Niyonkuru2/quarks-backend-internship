import app from '../quarks-api/app.js'
const PORT = 5689;

//Listenning message on defined PORT
app.listen(PORT,()=>{
    console.log(`Express Server is Running on ${PORT}`)
})