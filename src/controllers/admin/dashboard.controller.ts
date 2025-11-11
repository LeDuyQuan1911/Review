import { Request, Response } from "express";
import { getAllRoles, getAllUsers } from "services/user.service";

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
  console.log(fullname, username, phone, role, address);
  res.render("admin/dashboard/show.ejs");
};

export {
  getDashboardPage,
  getAdminUserPage,
  getAdminOrderPage,
  getAdminProductPage,
  getAdminCreateUserPage,
  postAdminCreateUser,
};
