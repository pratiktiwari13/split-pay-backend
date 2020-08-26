const db = require("../../../models");

module.exports = async function(req,res,next){
    try {
        const updatedUser = await db.users.update({username: req.body.username}, {where: {user_token: req.body.token}});
        res.status(200);
        res.end();
    }
    catch(err){
        res.status(400);
        res.end();
    }
}

//test
module.exports({body:{username:"updated_username",token:"token"}},{status:()=>{},end:()=>{}},()=>{});