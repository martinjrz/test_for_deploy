const express=require('express')
const server=express()
const path=require('path')
const port=process.env.PORT || 5000
if(process.env.NODE_ENV==='production')
{
  server.use(express.static('react-on-host/build'))
  server.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'react-on-host','build','index.html'))
  })
}
server.listen(port,()=>{
    console.log('connected to server')
})
