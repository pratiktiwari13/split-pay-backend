const db = require("../../../models");

module.exports = async function (req,res,next){
        const user = await db.users.findAll({raw:true},{attributes:["username"]},{where:{username:req.body.username}});
        if(user[0].username === req.body.username) {
            res.status(200);
        }
        else {
            console.log(user);
            res.status(404);
        }
        res.end();
}
