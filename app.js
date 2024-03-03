const express = require("express");
const { setDefaultAutoSelectFamily } = require("net");
// const { Server } = require("http");
const path = require("path");
const app = express();
const port = 80;
const fs = require("fs");

// Express spacific stuff

app.use("/static", express.static("static"));  //  for serving static Files
app.use(express.urlencoded())

// Pug spacific stuff

app.set('view engine', 'pug')                 // set the templete engin for Pug
app.set("views",path.join(__dirname,"views"))  //  set the value directory

// End Point

app.get("/",(req,res)=>{
    const con = 'this is the best content on the internet';
    const params ={'title':'The best pubg game', "content":con}
    res.status(200).render('index.pug',params);
})

app.post("/",(req,res)=>{
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;

    let OutputToWrite =`The name of the client ${name}, ${age}years old, ${gender},regidencey is local ${address},about his ${more}`;
    fs.writeFileSync("output.txt",OutputToWrite);

    const params ={'message':'Your form has been submitted successfully'}
    res.status(200).render('index.pug',params);
})

//  start the Server


app.listen(port,()=>{
    console.log(`The application started is successfully on port ${port}`)
});