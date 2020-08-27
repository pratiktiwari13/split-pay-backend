const db = require("../../../models");

module.exports = async function(req,res,next){
    try{
        const userDetails = req.userDetails;
        const userExists = await db.users.findOne({attributes:["user_email"],raw:true,where:{user_email:userDetails.email}});
        console.log(userDetails.parsedToken);
        if(userExists === null){
            await db.users.create({
                user_email:userDetails.email,
                user_token:req.parsedToken
            });
            res.status(200);
            res.end();
        }
        else{
            db.users.update({user_token:req.parsedToken},{where:{user_token:req.parsedToken}});
            res.status(200);
            res.end();
        }
    }
    catch(err){
        console.log(err);
    }
}
/*
var data = {
    iss: 'accounts.google.com',
        azp: '1003783467324-cv7nn44hcmqejd0m3vtv8q7jhv9bacsr.apps.googleusercontent.com',
        aud: '1003783467324-cv7nn44hcmqejd0m3vtv8q7jhv9bacsr.apps.googleusercontent.com',
        sub: '110439657735725170910',
        hd: 'quantiphi.com',
        email: 'gurpreet.kamboj@quantiphi.com',
        email_verified: 'true',
        at_hash: '1CoY7L_22wxoF9MXNmfFPQ',
        name: 'Gurpreet Kamboj',
        picture: 'https://lh3.googleusercontent.com/a-/AOh14GjZvt1c01ae_oe1qLf4HXcmFuA81zxGi-vP_MsY=s96-c',
        given_name: 'Gurpreet',
        family_name: 'Kamboj',
        locale: 'en',
        iat: '1598450336',
        exp: '1598453936',
        jti: 'f2a931c95a6675bd68feebbd73ff73622ba66ddf',
        alg: 'RS256',
        kid: '0a7dc12664590c957ffaebf7b6718297b864ba91',
        typ: 'JWT'
}

module.exports({userDetails:data,parsedToken:"eyJhbGciOiJSUzI1NiIsImtpZCI6IjBhN2RjMTI2NjQ1OTBjOTU3ZmZhZWJmN2I2NzE4Mjk3Yjg2NGJhOTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTAwMzc4MzQ2NzMyNC1jdjdubjQ0aGNtcWVqZDBtM3Z0djhxN2podjliYWNzci5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwMDM3ODM0NjczMjQtY3Y3bm40NGhjbXFlamQwbTN2dHY4cTdqaHY5YmFjc3IuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTA0Mzk2NTc3MzU3MjUxNzA5MTAiLCJoZCI6InF1YW50aXBoaS5jb20iLCJlbWFpbCI6Imd1cnByZWV0LmthbWJvakBxdWFudGlwaGkuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiIxQ29ZN0xfMjJ3eG9GOU1YTm1mRlBRIiwibmFtZSI6Ikd1cnByZWV0IEthbWJvaiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHalp2dDFjMDFhZV9vZTFxTGY0SFhjbUZ1QTgxenhHaS12UF9Nc1k9czk2LWMiLCJnaXZlbl9uYW1lIjoiR3VycHJlZXQiLCJmYW1pbHlfbmFtZSI6IkthbWJvaiIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNTk4NDUwMzM2LCJleHAiOjE1OTg0NTM5MzYsImp0aSI6ImYyYTkzMWM5NWE2Njc1YmQ2OGZlZWJiZDczZmY3MzYyMmJhNjZkZGYifQ.EZBKqWbEzxgP6tD6jtNfyoRbJHyor1Xdoafz1bcKORbYZOUVmKCt0mxmZ4LZVjHIY0HXxvt0FuXhTglmP6Slms7UKZM8XrhRfYPfQNIksBdw1MujLKXfCGLpQV2A6cqIgATZOpQLvffCnweHwh2Q2_pC7UjOxnV7fIFFSIY4Jruu4lwqxPiYyY4mDrkjSQPjIC5CplzN2LFQRZbga61vZECJGMofJ1-yV-CLNcvP01bnslLFoLH3M4Q6qeq2vJJzcITRTGATDNtd3VjZzu7HnEmlN5oDFE-fx2DS8lZrNMooo8HE2LVR8upn1oi1ucOJO7xkgC10eZrxcAXAojms1Q"});*/