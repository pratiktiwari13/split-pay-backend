const db = require("../../models");

module.exports = async function(req,res,next){
    try {
        let group = await db.groups.create({
            group_name: req.body.group_name,
            total_members: req.body.members.length+1,
        });
        group = group.toJSON();
        for(let i=0;i<req.body.members.length;i++){
            try {
                let user_id = await db.users.findOne({
                    attributes: ['user_id'],
                    raw: true,
                    where: {username: req.body.members[i].username}
                });
                if (!user_id.user_id) {
                    res.status(404);
                    res.end();
                    return;
                }
                await db.groupsUsers.create({
                    user_id: user_id.user_id,
                    group_id: group.group_id
                });
            }
            catch(err){
                console.log(err);
            }
        }
        let user_id = await db.users.findOne({raw:true,where:{user_token:req.parsedToken}});
        await db.groupsUsers.create({
            user_id:user_id.user_id,
            group_id:group.group_id
        });
        res.status(200);
        res.end();
    }
    catch(err){
        res.status(400);
        res.end();
    }
}