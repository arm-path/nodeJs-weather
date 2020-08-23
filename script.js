const express = require('express')
const podyParser = require('body-parser')
const weatherMdl = require('./module/module_weather')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index', {weather:null, error:null})
})

app.post('/', async (req,res)=>{
    const {city} = req.body
    const {weather, error} = await weatherMdl(city)
    console.log(weather)
    console.log(error)
    res.render('index', {weather, error})
})

app.listen(3000, ()=>{
    console.log('Started server on 3000 port')
})