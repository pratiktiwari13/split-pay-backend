const db = require("../../models");

module.exports = async function (req,res,next){
    try {
        const user = await db.users.findAll({attributes:['username'],where:{ user_token:req.parsedToken},raw:true});
        console.log(user);
        next();
    }
    catch(err){
        console.log(err);
        next(400)
    }
}
