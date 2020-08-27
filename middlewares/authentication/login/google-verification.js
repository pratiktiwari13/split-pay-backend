const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("client");
const axios = require("axios");

module.exports = async function (req,res,next){
    try {
        //console.log(req.parsedToken);
        await verify(req.parsedToken);
        let data = await axios.get("https://oauth2.googleapis.com/tokeninfo?id_token="+req.parsedToken);
        req.userDetails = data;
        next();
    }
    catch(err){
        console.log(err);
        next(400);
    }
}

async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    // If request specified a G Suite domain:
    // const domain = payload['hd'];
}

/*module.exports({parsedToken:"eyJhbGciOiJSUzI1NiIsImtpZCI6IjBhN2RjMTI2NjQ1OTBjOTU3ZmZhZWJmN2I2NzE4Mjk3Yjg2NGJhOTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTAwMzc4MzQ2NzMyNC1jdjdubjQ0aGNtcWVqZDBtM3Z0djhxN2podjliYWNzci5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwMDM3ODM0NjczMjQtY3Y3bm40NGhjbXFlamQwbTN2dHY4cTdqaHY5YmFjc3IuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTA0Mzk2NTc3MzU3MjUxNzA5MTAiLCJoZCI6InF1YW50aXBoaS5jb20iLCJlbWFpbCI6Imd1cnByZWV0LmthbWJvakBxdWFudGlwaGkuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiIxQ29ZN0xfMjJ3eG9GOU1YTm1mRlBRIiwibmFtZSI6Ikd1cnByZWV0IEthbWJvaiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHalp2dDFjMDFhZV9vZTFxTGY0SFhjbUZ1QTgxenhHaS12UF9Nc1k9czk2LWMiLCJnaXZlbl9uYW1lIjoiR3VycHJlZXQiLCJmYW1pbHlfbmFtZSI6IkthbWJvaiIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNTk4NDUwMzM2LCJleHAiOjE1OTg0NTM5MzYsImp0aSI6ImYyYTkzMWM5NWE2Njc1YmQ2OGZlZWJiZDczZmY3MzYyMmJhNjZkZGYifQ.EZBKqWbEzxgP6tD6jtNfyoRbJHyor1Xdoafz1bcKORbYZOUVmKCt0mxmZ4LZVjHIY0HXxvt0FuXhTglmP6Slms7UKZM8XrhRfYPfQNIksBdw1MujLKXfCGLpQV2A6cqIgATZOpQLvffCnweHwh2Q2_pC7UjOxnV7fIFFSIY4Jruu4lwqxPiYyY4mDrkjSQPjIC5CplzN2LFQRZbga61vZECJGMofJ1-yV-CLNcvP01bnslLFoLH3M4Q6qeq2vJJzcITRTGATDNtd3VjZzu7HnEmlN5oDFE-fx2DS8lZrNMooo8HE2LVR8upn1oi1ucOJO7xkgC10eZrxcAXAojms1Q"},"",()=>{});*/