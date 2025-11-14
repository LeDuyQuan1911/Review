import { Request, Response } from "express";

const getAdminCreateProductPage = (req: Request, res: Response) => {
  res.render("admin/product/create.ejs");
};

const postAdminCreateProductPage = (req: Request, res: Response) => {
  console.log(req.file);
  res.redirect("/admin/product");
};

export { getAdminCreateProductPage, postAdminCreateProductPage };
