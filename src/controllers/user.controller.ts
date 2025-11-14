import { Request, Response } from "express";
import {
  createUser,
  getAllUsers,
  deleteUser,
  detailUserService,
  // updatelUserService,
} from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
  res.render("client/home/show.ejs");
};

const getLoginPage = (req: Request, res: Response) => {
  res.render("createUser.ejs");
};

const loginUser = async (req: Request, res: Response) => {
  const { name, email, address } = req.body;
  // await createUser(name, email, address);
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
  res.render("detailUser.ejs", {
    name: "Chi tiet nguoi dung",
    data: data,
  });
};

// const updateUserController = async (req: Request, res: Response) => {
//   const { id, name, email, address } = req.body;
//   const data = await updatelUserService(id, name, email, address);
//   res.redirect("/");
// };

export {
  getHomePage,
  getLoginPage,
  loginUser,
  deleteUserController,
  detailUserController,
  // updateUserController,
};
