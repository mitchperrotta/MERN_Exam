const LoginRegController = require('../controllers/loginReg.controller');
    userController = require('../controllers/user.controller'),
    {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.post("/api/register", LoginRegController.register);
    app.post("/api/login", LoginRegController.login);
    app.get("/api/users", authenticate, userController.index);
    app.get("/api/logout", authenticate, LoginRegController.logout);
}