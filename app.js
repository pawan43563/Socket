const express=require('express')
const app=express()
const http=require('http').createServer()
const port=3000
const io=require('socket.io')(http);

io.on("connection",(socket)=>{

    socket.emit("message","Hello and Welcome to socket.io")
    console.log("new client is connected")


})

http.listen(port,()=>{
    console.log("Server Started at "+port);
})