const express = require("express")
const userRoute = require("./routes/user.js")
const path = require("path")
const app = express()
const PORT = 3000

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.get("/",(req,res)=>{
    res.render("home")
})

app.use("/user",userRoute)

app.listen(PORT,()=>{
    console.log(`App listening on server ${PORT}`);
})