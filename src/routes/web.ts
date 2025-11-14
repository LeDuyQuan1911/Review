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
  getAdminDetailUser,
  postAdminUpdateUser,
} from "../controllers/admin/dashboard.controller";
import fileUploadMiddleware from "src/middleware/multer";
import { getProductPage } from "controllers/client/product.controller";
import {
  getAdminCreateProductPage,
  postAdminCreateProductPage,
} from "controllers/admin/product.controller";

// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const router = express.Router();

const webRoutes = (app: Express) => {
  // USER ROUTES
  router.get("/", getHomePage); // Trang chủ
  // router.get("/create-user", getLoginPage);
  // router.post("/create-user", loginUser);
  // router.post("/delete-user/:id", deleteUserController);
  // router.get("/detail-user/:id", detailUserController);
  // router.post("/update-user", updateUserController);

  //Product ROUTE
  router.get("/product/:id", getProductPage); // Client
  router.get("/admin/product", getAdminProductPage); // Admin
  router.get("/admin/createProduct", getAdminCreateProductPage); // Admin
  router.post(
    "/admin/createProduct",
    fileUploadMiddleware("image", "images/product"),
    postAdminCreateProductPage
  ); // Admin

  // ADMIN ROUTE
  router.get("/admin", getDashboardPage);
  router.get("/admin/user", getAdminUserPage);
  router.get("/admin/order", getAdminOrderPage);
  router.get("/admin/createUser", getAdminCreateUserPage);
  router.post(
    "/admin/createUser",
    fileUploadMiddleware("avatar"),
    postAdminCreateUser
  );
  router.post("/admin/deleteUser/:id", postAdminDeleteUser);
  router.get("/admin/detailUser/:id", getAdminDetailUser);
  router.post(
    "/admin/updateUser",
    fileUploadMiddleware("avatar"),
    postAdminUpdateUser
  );

  // Mount router
  app.use("/", router);
};

export { webRoutes };
