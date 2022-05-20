const express =require('express');

const app = express();

app.use('/',(req, res, next)=>{
    console.log("This allways run")
    next(); //다음 미들웨어의 작업으로 넘어갈 수 있도록 해준다.
})

app.use('/add-product',(req, res, next)=>{
    console.log("In another middleWare")
    res.send(`<h1>Add</h1>`);
})

app.use('/',(req, res, next)=>{
    console.log("In the middleWare")
    res.send(`<h1>Hello, from Express</h1>`);
})


app.listen(3000);