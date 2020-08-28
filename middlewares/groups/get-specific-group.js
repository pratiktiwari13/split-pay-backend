const db = require("../../models");

module.exports = async function(req,res,next){
    try {
        const group_id = req.params.id;
        const users = [];
        const user_ids = await db.groupsUsers.findAll({
            attributes: ['user_id'],
            raw: true,
            where: {group_id: group_id}
        });
        for (let i = 0; i < user_ids.length; i++) {
            const user = await db.users.findOne({
                raw:true,
                attributes: ['user_id', 'username', 'user_email'],
                where: {user_id: user_ids[i].user_id}
            });
            users.push(user);
        }
        const history = await db.groupsExpenses.findAll({attributes:['amount','description'],raw:true,where:{group_id:req.params.id}});
        const result = {users:users, payment_history:history};
        res.status(200);
        res.send(result);
    }
    catch(err){
        res.status(404);
        res.end();
    }
}
