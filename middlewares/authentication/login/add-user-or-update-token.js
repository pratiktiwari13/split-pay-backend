const db = require("../../../models");

module.exports = async function(req,res,next){
    try{
        const userDetails = req.userDetails;
        console.log(userDetails.data.email);
        const userExists = await db.users.findOne({attributes:["user_email"],raw:true,where:{user_email:userDetails.data.email}});
        console.log(userDetails.parsedToken);
        if(userExists === null){
            await db.users.create({
                user_email:userDetails.email,
                user_token:req.parsedToken
            });
            res.status(200);
            res.end();
        }
        else{
            db.users.update({user_token:req.parsedToken},{where:{user_token:req.parsedToken}});
            res.status(200);
            res.end();
        }
    }
    catch(err){
        console.log(err);
    }
}