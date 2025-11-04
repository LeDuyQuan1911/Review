"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000;
const web_1 = require("./routes/web");
const path = require("path");
//config view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//config public folder
app.use(express.static("public"));
// config data từ client gửi lên - config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// config ROUTES
(0, web_1.webRoutes)(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map