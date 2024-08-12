import express from 'express'
import  bodyParser from 'body-parser'

import { html } from "./htmlstring.js"

const app = express()
const port = 8088

app.use(bodyParser.json())

app.get('/portfolioo',(req,res)=>{
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from(html))
})
app.get('/product',(req,res)=>{
    res.send('stationary')
})
const detail ={
    color: 'white',
    ages: 39,
    name2: 'jon'
}

app.get('/jsonObject',(req,res)=>{
    res.send(detail)
})
const data = {
    "name": "zahid",
    "age": 19.53,
    "isAmdin": true,
    "licence": null,
    "user":{"ab":"hello",
        "shop":[1,2,3,4]
    }
}

app.get('/login',(req,res)=>{
    res.send('wrong username and password')
})
const userData = {
    userName:'adeel121',
    passWord:'falcon'
}

app.post('/signin',(req,res)=>{
    if(req.body.userName === userData.userName && req.body.passWord === userData.passWord)
    {
        res.redirect('/portfolioo')
    }
    else
    {
        res.redirect('/login')
    }
    console.log(req.body.userName,userData.userName)
    res.json(req.body)

})
app.delete('/delName',(req,res) => {
    const user = {
        name:'awais',
        cnic:374056677,
        email:'awais99@gmail.com'
    }
    console.log('hrere')
   delete user.name
    res.json(user)
})

app.listen(port,()=>{
    console.log('server is running on localhost:8088')
})

