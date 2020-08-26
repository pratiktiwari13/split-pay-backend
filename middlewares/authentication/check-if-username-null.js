const db = require("../../models");

module.exports = async function (req,res,next){
    try {
        console.log("check if username is null");
        const username = await db.users.findOne({raw:true},{attributes: ['username']}, {where: {user_token: req.body.token}});
        if (username)
            next();
        else
            next(405);
    }
    catch(err){
        next(400);
    }
}

//test
module.exports({body:{token:"token"}},"",()=>{});