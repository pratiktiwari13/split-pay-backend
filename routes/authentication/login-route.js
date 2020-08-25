const authMiddleware = require("../../middlewares/authentication");
const loginRoute = require("express").Router();
const scanToken = authMiddleware.scanToken;
const googleVerification = authMiddleware.googleVerification;
const checkIfUsernameNull = authMiddleware.checkIfUsernameNull;
const validateToken = authMiddleware.validateToken;
const validateUsername = authMiddleware.validateUsername;
const setUsername = authMiddleware.setUsername;

loginRoute.post("/",scanToken,googleVerification,checkIfUsernameNull);
loginRoute.get("/validate-username",scanToken,validateToken,validateUsername);
loginRoute.patch("/username/set/",scanToken,validateToken,setUsername);

module.exports = loginRoute;