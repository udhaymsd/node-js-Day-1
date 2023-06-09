

const express = require("express")
const fs = require("fs")
const path = require("path");

const dirpath = path.join(__dirname,"timestamps")


const app = express()

//middlewares
app.use(express.static("timestamps"))

app.get('/', function (req, res) {
  res.send('Hey there i am working fine')
})

app.get("/static",(req,res)=>{
    let time = new Date();
    let dateString = time.toUTCString().slice(0,-3)
   // console.log(dateString)
    const content =`Last created timestamp ${dateString}`

    fs.writeFileSync(`${dirpath}/date-time.txt`,content,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("file created sucessfully")
        }
    })

    res.sendFile(path.join(__dirname,"timestamps/date-time.txt"))

})

app.listen(5000,()=>console.log('server started in localhost:5000'))