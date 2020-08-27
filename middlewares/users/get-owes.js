const db = require("../../models");
const { Op } = require("sequelize");

module.exports = async function (req,res,next){
    console.log("get owed");
    const user_id = await db.users.findOne({attributes:['user_id'],raw:true,where:{user_token:req.parsedToken}});
    console.log(user_id.user_id);
    const expenses = await db.expenses.findAll({attributes:['expense_id'],raw:true,where: {to_user_id:user_id.user_id, from_user_id:{
        [Op.ne]: user_id.user_id
      } }});
    var result=[];
    for(let i=0;i<expenses.length;i++) {
        const temp = await db.expenses.findAll({
            attributes: ['expense_id','from_user_id', 'amount', 'is_paid'],
            raw: true,
            where: {expense_id: expenses[i].expense_id , is_paid:0}
        });
        const usernames = await db.users.findOne({
            attributes: ['username'],
            raw:true,
            where: {user_id: temp[0].from_user_id }
        });
        await result.push({
            id: temp[0].to_user_id,
            name: usernames.username,
            amount: temp[0].amount
            
        });
    }
    
    console.log(result);
    res.status(200);
    res.send(result);

}
//test
/*module.exports({body:{token:"test"}},{status:()=>{},send:()=>{},end:()=>{}},()=>{});

const result = [{
    user_id:1,
    username:"Gurpreet",
    amount:100
},
{
    user_id:2,
    username:"Dhiren",
    amount:200
}];
    res.status(200);
    res.send(result);*/