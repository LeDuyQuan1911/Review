import { Request, Response } from "express";
import {
  createUser,
  getAllUsers,
  handleCreateUser,
  deleteUser,
  detailUserService,
} from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
  // lấy data:
  const data = await getAllUsers();
  // console.log(data);
  res.render("index.ejs", {
    name: "User",
    data: data,
  });
};

const getLoginPage = (req: Request, res: Response) => {
  res.render("home.ejs");
};

const loginUser = async (req: Request, res: Response) => {
  const { name, email, address } = req.body;
  await createUser(name, email, address);
  // const data = await getAllUsers();
  // res.status(200).render("index.ejs", {
  //   name: "User",
  //   data: data,
  // });
  res.redirect("/");
};

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUser(id);
  res.redirect("/");
};

const detailUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await detailUserService(id);
  console.log(data);
  res.render("detailUser.ejs", {
    name: "Chi tiet nguoi dung",
    data: data,
  });
};

export {
  getHomePage,
  getLoginPage,
  loginUser,
  deleteUserController,
  detailUserController,
};
