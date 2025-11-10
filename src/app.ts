const express = require("express");
const app = express();
const port = 3000;
import initDatabase from "config/seed";
import getConnection from "./config/database";
import { webRoutes } from "./routes/web";
import path = require("path");

//config view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//config public folder
app.use(express.static("public"));

// config data từ client gửi lên - config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config ROUTES
webRoutes(app);

//seeding data
// initDatabase();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
