const db = require("../../models");

module.exports = async function (req,res,next){
    try {
        const user = await db.users.findAll({attributes:['username']},{where:{ user_token:req.body.token}});
        next();
    }
    catch(err){
        console.log(err);
        next(400)
    }
}

//test
module.exports({body:{token:"token"}},"",()=>{});