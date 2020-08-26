const db = require("../../models");

module.exports = async function(req,res,next){
    try {
        console.log("Add group");
        const group = await db.groups.create({
            group_name: req.body.group_name,
            total_members: req.body.members,
        });
        console.log(group);
        /*requestedMembers.forEach((member)=>{
            await db.
        })*/
        res.status(200);
        res.end();
    }
    catch(err){
        res.status(400);
        res.end();
    }
}

//test
module.exports({body:{group_name:"group1",members:5}},{status:()=>{},end:()=>{}},()=>{});