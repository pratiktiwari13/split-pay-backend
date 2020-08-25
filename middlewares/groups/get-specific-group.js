module.exports = function(req,res,next){
    console.log("Return all groups");
    const result ={
        name:Group1,
        users:[{
            user_id:1,
            username:"Pratik",
            email:"pratik@abc.com"
        },
            {
                user_id:2,
                username:"Guri",
                email:"guri@abc.com"
            }],
        payment_history:[
            {
                amount:1000,
                description:"Dinner"
            },
            {
                amount:2000,
                description:"Lunch"
            }]
    };

    res.status(200);
        res.send(result);
}