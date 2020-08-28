const db = require("../../../models");

module.exports = async function(req,res,next){
    try{
        const userDetails = req.userDetails;
        const userExists = await db.users.findOne({attributes:["user_email"],raw:true,where:{user_email:userDetails.data.email}});
        if(userExists === null){
            await db.users.create({
                user_email:userDetails.data.email,
                user_token:req.parsedToken
            });
            res.status(200);
            res.end();
        }
        else{
            const updatedUser = await db.users.findOne({attributes:['user_id'],where:{user_email:req.userDetails.data.email}});
            await updatedUser.update({user_token:req.parsedToken});
            res.status(200);
            res.end();
        }
    }
    catch(err){
        res.send(err);
    }
}