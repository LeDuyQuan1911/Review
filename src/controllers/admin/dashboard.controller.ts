import { Request, Response } from "express";

const getDashboardPage = async (req: Request, res: Response) => {
  console.log("hello");
  res.render("admin/dashboard.ejs");
};

export { getDashboardPage };
