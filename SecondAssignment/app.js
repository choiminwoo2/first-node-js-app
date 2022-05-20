const express = require('express');

const app = express();

app.use('/user',(req,res,next)=>{
    console.log('/user routing')
    res.send(`<h1>This is userPage</h1>`)
})
app.use('/',(req,res,next)=>{
    console.log('/ routing')
    res.send(`<h1>This is Homepage</h1>`)
})


app.listen(3000);