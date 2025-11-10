import express, { Express } from "express";
import {
  getHomePage,
  loginUser,
  getLoginPage,
  deleteUserController,
  detailUserController,
  updateUserController,
} from "../controllers/user.controller";
import { getDashboardPage } from "../controllers/admin/dashboard.controller";

const router = express.Router();

const webRoutes = (app: Express) => {
  // USER ROUTES
  router.get("/", getHomePage); // Trang chủ
  router.get("/create-user", getLoginPage);
  router.post("/create-user", loginUser);
  router.post("/delete-user/:id", deleteUserController);
  router.get("/detail-user/:id", detailUserController);
  router.post("/update-user", updateUserController);

  // ADMIN ROUTE
  router.get("/admin", getDashboardPage);

  // Mount router
  app.use("/", router);
};

export { webRoutes };
