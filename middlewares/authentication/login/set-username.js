const db = require("../../../models");

module.exports = async function(req,res,next){
    try {
        const updatedUser = await db.users.findOne({attributes:['user_id'],where:{user_token:req.parsedToken}});
        await updatedUser.update({username:req.body.username});
        res.status(200);
        res.end();
    }
    catch(err){
        console.log(err);
        res.status(400);
        res.end();
    }
}
