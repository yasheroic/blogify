const { verifyUserToken } = require("../services/authentication")

function checkAuthenticationCookie(cookieName){
    return(req,res,next)=>{
        const tokenCookieValue = req.cookies[cookieName]
        if(!tokenCookieValue){
            return next()
        }

        try {
            const userPayload = verifyUserToken(tokenCookieValue)
            req.user = userPayload
        } catch (error) {
        }
        next()
    }
}

module.exports={
    checkAuthenticationCookie
}