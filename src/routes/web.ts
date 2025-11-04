import express, { Express } from "express";
import {
  getHomePage,
  loginUser,
  getLoginPage,
  deleteUserController,
  detailUserController,
} from "../controllers/user.controller";
const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", getHomePage);
  router.get("/login-user", getLoginPage);
  router.post("/login-user", loginUser);
  router.post("/delete-user/:id", deleteUserController);
  router.get("/detail-user/:id", detailUserController);

  app.use("/", router);
};

export { webRoutes };
