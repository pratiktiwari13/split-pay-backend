const authMiddleware = require("../../middlewares/authentication");
const loginRoute = require("express").Router();
const scanToken = authMiddleware.scanToken;
const googleVerification = authMiddleware.googleVerification;
const addUserOrUpdateToken = authMiddleware.addUserOrUpdateToken;
const validateToken = authMiddleware.validateToken;
const validateUsername = authMiddleware.validateUsername;
const setUsername = authMiddleware.setUsername;


loginRoute.post("/",scanToken,googleVerification,addUserOrUpdateToken);
loginRoute.get("/validate-username",scanToken,validateToken,validateUsername);
loginRoute.patch("/username/set/",scanToken,validateToken,setUsername);

module.exports = loginRoute;