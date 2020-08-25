module.exports =
function globalErrorHandler(err,req,res,next){
    switch(err){

        case 405:
            res.status(405);
            res.end();
            break;

        case 400:
            res.status(400);
            res.end();
            break;
    }
}