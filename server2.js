const express=require('express');
const app=express();
const http=require('http').createServer(app);

const PORT = process.env.PORT || 8001;
app.use(express.static('public2'));


app.get('/',(req,res) => {
    res.sendFile('./index2.html',{root:__dirname})
})

http.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})