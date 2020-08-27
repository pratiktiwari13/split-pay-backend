const db = require("../../../models");

module.exports = async function(req,res,next){
    try {
        const updatedUser = await db.users.update({user_token:""}, {where: {user_token: req.parsedToken}});
        res.status(200);
        res.end();
    }
    catch(err){
        res.status(400);
        res.end();
    }
}

//test
/*module.exports({body:{token:"token"}},{status:()=>{},end:()=>{}},()=>{});*/
