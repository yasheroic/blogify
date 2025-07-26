const {Router} = require("express")
const router = Router()
const User = require("../models/user.js")

router.get("/signin",(req,res)=>{
    res.render("signin")
})

router.get("/signup",(req,res)=>{
    res.render("signup")
})

router.post("/signup",async(req,res)=>{
    const {fullName,email,password} = req.body
    await User.create({
        fullName,
        email,
        password
    })
    return res.redirect("/")
})

router.post("/signin",async(req,res)=>{
    const{email,password}= req.body

    try {
        
    } catch (error) {
        
    }


    const user = await User.matchPasswordAndGenerateToken(email,password)
    console.log("User Details", user)

    res.redirect("/")

})

module.exports = router;