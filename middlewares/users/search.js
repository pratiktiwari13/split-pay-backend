const db = require("../../models");

module.exports = async function (req,res,next){
    console.log("search user");
    const user_names = await db.users.findOne({attributes:['username'],raw:true,where:{username:req.body.username} });
    if(user_names == null)
    {
        res.status(400);
        res.end();
    }
    else{
        console.log(user_names);
        res.status(200);
        res.end();
    }
    
}

//test
/*module.exports({body:{token:"test",username:"dh"}},{status:()=>{},end:()=>{}},()=>{});*/