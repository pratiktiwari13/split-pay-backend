const db = require("../../../models");

module.exports = async function (req,res,next){
        console.log("Check if the username exists and return 200 or 404");
        const user = await db.users.findAll({raw:true},{attributes:["username"]},{where:{username:req.body.username}});
        if(user[0].username === req.body.username) {
            console.log("right");
            res.status(200);
        }
        else {
            console.log(user);
            res.status(404);
        }
        res.end();
}

module.exports({body:{username:"updated_username"}},{status:()=>{},end:()=>{}});