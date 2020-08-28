const db = require("../../models");

module.exports = async function(req,res,next){
    try {
        const username = await db.users.findOne({attributes: ['username'],raw:true,where: {user_token: req.parsedToken}});
        if (username && username.username) {
            next();
        }
        else
            next(405);
    }
    catch(err){
        next(400);
    }
}