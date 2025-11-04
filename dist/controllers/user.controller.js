"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.getLoginPage = exports.getHomePage = void 0;
const user_service_1 = require("../services/user.service");
const getHomePage = (req, res) => {
    res.render("index.ejs");
};
exports.getHomePage = getHomePage;
const getLoginPage = (req, res) => {
    res.render("home.ejs");
};
exports.getLoginPage = getLoginPage;
const loginUser = (req, res) => {
    const { username, age } = req.body;
    (0, user_service_1.handleCreateUser)(username, age);
    res.status(200).redirect("/");
};
exports.loginUser = loginUser;
//# sourceMappingURL=user.controller.js.map