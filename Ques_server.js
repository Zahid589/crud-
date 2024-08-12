import express from 'express'
import  bodyParser from 'body-parser'


const app = express()
const port = 8089

app.use(bodyParser.json())


const user = [{
    name:'adeel',
    cnic:374059826,
    email:'adeel3099@gmail.com'
},
{
    name:'zahid',
    cnic:374056822,
    email:'zahidilyas589@gmail.com'
},
{
    name:'zaibi',
    cnic:374051122,
    email:'shahzaib@gmail.com'
},
{
    name:'danish',
    cnic:374052233,
    email:'danish99@gmail.com'
},
{
    name:'jawad',
    cnic:374053344,
    email:'jawad99@gmail.com'
},
{
    name:'rehan',
    cnic:374054455,
    email:'adeel3099@gmail.com'
},
{
    name:'hamza',
    cnic:374055566,
    email:'hamza99@gmail.com'
},
{
    name:'awais',
    cnic:374056677,
    email:'awais99@gmail.com'
},
{
    name:'aryan',
    cnic:374058899,
    email:'aryan99@gmail.com'
},
{
    name:'rafay',
    cnic:374059911,
    email:'rafay99@gmail.com'
}]
app.get('/arrayOfObject',(req,res) => {
    res.json(user)
})

app.post('/addAge',(req,res) => {
    try{
    const age = req.body.ages
    let updateUser = {...user[0],age}
    res.json(updateUser)}
    catch(err){
        console.log(err)
    }
})

app.post('/addAges',(req,res) => {
    const {ages}= req.body
    let updateUser = user.map(items => ({...items, age: ages[items.name]}))
    res.json(updateUser)

})

app.get('/nameAge',(req,res) =>{
    const result = user.map(user => ({...user,nameAge:`${user.name} ${user.age}`}))
    res.json(result)
})

app.delete('/delName',(req,res) => {
    delete user[0].name
    res.json(user[0])
})

app.delete('/delNames',(req,res) => {
   const updateUser = user.map(user => {
        delete user.name;
        return user
    })
    res.json(updateUser)
})
app.listen(port,()=>{
    console.log('server is running on localhost:8089')
})