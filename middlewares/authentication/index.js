const scanToken = require("./login/scan-token");
const googleVerification = require("./login/google-verification");
const removeToken = require("./logout/remove-token");
const checkIfUsernameNull = require("./check-if-username-null");
const validateToken = require("./validate-token");
const validateUsername = require("./login/validate-username");
const setUsername = require("./login/set-username");

module.exports = {
    scanToken,
    googleVerification,
    removeToken,
    checkIfUsernameNull,
    validateToken,
    validateUsername,
    setUsername
};