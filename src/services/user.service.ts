import getConnection from "../config/database";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const handleCreateUser = (username: string, age: number) => {
  console.log(username, age);
};

const getAllUsers = async () => {
  try {
    const results = await prisma.user.findMany();
    return results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getAllRoles = async () => {
  try {
    const roles = await prisma.role.findMany();
    return roles;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const createUser = async (fullname, username, address) => {
  try {
    const data = {
      fullname: fullname,
      username: username,
      address: address,
      password: "",
      accountType: "",
    };
    const result = await prisma.user.create({ data: data });
    return result;
  } catch (err) {
    console.error("❌ Error inserting user:", err);
    return null;
  }
};

const deleteUser = async (id) => {
  try {
    const result = prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });

    return result;
  } catch (error) {
    console.error("Lỗi khi xóa user:", error);
    throw error;
  }
};

const detailUserService = async (id) => {
  try {
    const result = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    return result;
  } catch (error) {
    console.error("❌ Lỗi khi xem chi tiết user:", error);
    throw error;
  }
};

const updatelUserService = async (id, name, email, address) => {
  try {
    const result = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        fullName: name,
        username: email,
        address,
        password: "",
        accountType: "",
      },
    });
    return result;
  } catch (error) {
    console.error("❌ Lỗi khi xem chi tiết user:", error);
    throw error;
  }
};

export {
  handleCreateUser,
  getAllUsers,
  createUser,
  deleteUser,
  detailUserService,
  updatelUserService,
  getAllRoles,
};
