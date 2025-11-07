import express, { Express } from "express";
import {
  getHomePage,
  loginUser,
  getLoginPage,
  deleteUserController,
  detailUserController,
  updateUserController,
} from "../controllers/user.controller";
const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", getHomePage);
  router.get("/create-user", getLoginPage);
  router.post("/create-user", loginUser);
  router.post("/delete-user/:id", deleteUserController);
  router.get("/detail-user/:id", detailUserController);
  router.post("/update-user", updateUserController);

  app.use("/", router);
};

export { webRoutes };
