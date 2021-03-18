const express=require('express')
const server=express()
const path=require('path')
const parser=require('body-parser')
const bodyParser = require('body-parser')
const cors=require('cors')
const port=process.env.PORT || 5000
if(process.env.NODE_ENV==='production')
{
  server.use(express.static('react-on-host/build'))
  server.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'react-on-host','build','index.html'))
  })
}
server.use(bodyParser.urlencoded({extended:true}))
server.use(parser.json())
server.post('/postuser',(req,res)=>{
    console.log(req.body)
})

server.use(cors({
    credentials:true,
    allowedHeaders:"*"
}))
server.listen(port,()=>{
    console.log('connected to server')
})
