import { Request, Response } from "express";
import { stringify } from "querystring";
import {
  createUser,
  deleteAdminUser,
  deleteUser,
  detailAdminUserService,
  getAllRoles,
  getAllUsers,
  updatelUserService,
} from "services/user.service";

const getDashboardPage = async (req: Request, res: Response) => {
  res.render("admin/dashboard/show.ejs");
};

const getAdminUserPage = async (req: Request, res: Response) => {
  const data = await getAllUsers();
  res.render("admin/user/show.ejs", {
    name: "User",
    data: data,
  });
};

const getAdminCreateUserPage = async (req: Request, res: Response) => {
  const roles = await getAllRoles();
  res.render("admin/user/create.ejs", {
    roles,
  });
};

const getAdminOrderPage = async (req: Request, res: Response) => {
  res.render("admin/order/show.ejs");
};

const getAdminProductPage = async (req: Request, res: Response) => {
  res.render("admin/product/show.ejs");
};

const postAdminCreateUser = async (req: Request, res: Response) => {
  const { fullname, username, phone, role, address } = req.body;
  const file = req.file;
  const avatar = file?.filename ?? null;
  await createUser(fullname, username, address, phone, avatar, role);
  res.redirect("/admin/user");
};

const postAdminDeleteUser = async (req: Request, res: Response) => {
  const id = req.params; //25
  await deleteAdminUser(id.id);
  res.redirect("/admin/user");
};

const getAdminDetailUser = async (req: Request, res: Response) => {
  const user = req.params;
  const data = await detailAdminUserService(user.id);
  const roles = await getAllRoles();
  res.render("admin/user/detailUser.ejs", {
    data: data,
    roles,
  });
};

const postAdminUpdateUser = async (req: Request, res: Response) => {
  const { id, fullname, username, address, phone, role } = req.body;
  const file = req.file;
  const avatar = file?.filename ?? null;
  await updatelUserService(id, fullname, username, address, phone, avatar, role);
  res.redirect("/admin/user");
};

export {
  getDashboardPage,
  getAdminUserPage,
  getAdminOrderPage,
  getAdminProductPage,
  getAdminCreateUserPage,
  postAdminCreateUser,
  postAdminDeleteUser,
  getAdminDetailUser,
  postAdminUpdateUser,
};
