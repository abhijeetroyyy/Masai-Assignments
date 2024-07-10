// const sum = require("./sum");
// let res = sum(1, 2);
// console.log(res);


const fs=require("fs");
// fs.readFile("./Readme.md","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// const os=require("os")
// // console.log(os.cpus())
// console.log(os.totalmem())

fs.writeFile("./dummy.txt","this is the text data written ",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file written successfully");
    }
})