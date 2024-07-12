const express = require("express");
const fs = require("fs")
const server = express();
const PORT = 3000;
server.use(express.json());


server.get("/home",(req,res)=>{
    res.send("Hello World welcome to home page")
})
server.get("/user-data",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8")
    res.send(data)
})

server.post("/add-data",(req,res)=>{
    const incommingdata = req.body;
    const userData = fs.readFileSync("./db.json","utf-8");
    const parsedData = JSON.parse(userData);
    parsedData.data.push(incommingdata);
    fs.writeFileSync("./db.json",JSON.stringify(parsedData))
    console.log(incommingdata)
    res.send(`Data added successfully ${parsedData}`)
})

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})