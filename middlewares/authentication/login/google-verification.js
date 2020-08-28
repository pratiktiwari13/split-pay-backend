const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("client");
const axios = require("axios");

module.exports = async function (req,res,next){
    try {
        await verify(req.parsedToken);
        let data = await axios.get("https://oauth2.googleapis.com/tokeninfo?id_token="+req.parsedToken);
        req.userDetails = data;
        next();
    }
    catch(err){
        next(400);
    }
}

async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token
    });
}