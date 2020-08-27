const db = require("../../models");

module.exports = async function(req,res,next){
    try {
        console.log("check if username is null");
        const username = await db.users.findAll({attributes: ['username'],raw:true,where: {user_token: req.parsedToken}});
        if (username) {
            next();
            console.log("called next");
        }
        else
            next(405);
    }
    catch(err){
        next(400);
    }
}

//test
/*module.exports({body:{token:"token"}},"",()=>{});*/