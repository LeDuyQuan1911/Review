import express, { Express } from "express";
import {
  getHomePage,
  loginUser,
  getLoginPage,
  deleteUserController,
  detailUserController,
  // updateUserController,
} from "../controllers/user.controller";
import {
  getDashboardPage,
  getAdminUserPage,
  getAdminOrderPage,
  getAdminProductPage,
  getAdminCreateUserPage,
  postAdminCreateUser,
  postAdminDeleteUser,
} from "../controllers/admin/dashboard.controller";
import fileUploadMiddleware from "src/middleware/multer";

// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const router = express.Router();

const webRoutes = (app: Express) => {
  // USER ROUTES
  // router.get("/", getHomePage); // Trang chủ
  // router.get("/create-user", getLoginPage);
  // router.post("/create-user", loginUser);
  // router.post("/delete-user/:id", deleteUserController);
  // router.get("/detail-user/:id", detailUserController);
  // router.post("/update-user", updateUserController);

  // ADMIN ROUTE
  router.get("/admin", getDashboardPage);
  router.get("/admin/user", getAdminUserPage);
  router.get("/admin/order", getAdminOrderPage);
  router.get("/admin/product", getAdminProductPage);
  router.get("/admin/createUser", getAdminCreateUserPage);
  router.post(
    "/admin/createUser",
    fileUploadMiddleware("avatar"),
    postAdminCreateUser
  );
  router.post("/admin/deleteUser/:id", postAdminDeleteUser);

  // Mount router
  app.use("/", router);
};

export { webRoutes };
