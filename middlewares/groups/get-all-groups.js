const db = require("../../models");
module.exports =async (req,res,next)=>{
    console.log("Get all groups and return");
    const user_id = await db.users.findOne({attributes:['user_id'],raw:true},{where:{user_token:req.parsedToken}});
    console.log(user_id.user_id);
    const group_ids = await db.groupsUsers.findAll({attributes:['group_id'],raw:true,where:{user_id:user_id.user_id}});
    var result=[];
    for(let i=0;i<group_ids.length;i++) {
        const temp = await db.groups.findAll({
            attributes: ['group_id', 'total_members', 'group_name'],
            raw: true,
            where: {group_id: group_ids[i].group_id}
        });
        await result.push({
            id: temp[0].group_id,
            members: temp[0].total_members,
            name: temp[0].group_name
        });
    }
    console.log(result);
    res.status(200);
    res.send(result);
}

//test
/*module.exports({body:{token:"token"}},{status:()=>{},send:()=>{},end:()=>{}},()=>{});*/