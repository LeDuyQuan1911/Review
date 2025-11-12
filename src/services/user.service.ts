import { ACCOUNT_TYPE } from "config/constant";
import getConnection from "../config/database";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

import bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = async (plainText: string) => {
  return await bcrypt.hash(plainText, saltRounds);
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

const createUser = async (
  fullname: string,
  username: string,
  address: string,
  phone: string,
  avatar: string,
  role: string
) => {
  const defaultPassword = await hashPassword("123456");
  try {
    const data = {
      fullname: fullname,
      username: username,
      address: address,
      password: defaultPassword,
      accountType: ACCOUNT_TYPE.SYSTEM,
      avatar: avatar,
      phone: phone,
      roleId: +role,
    };
    const result = await prisma.user.create({ data });
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

const deleteAdminUser = async (id) => {
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

// const updatelUserService = async (  fullname: string,
//   username: string,
//   address: string,
//   phone: string,
//   avatar: string) => {
//   try {
//     const result = await prisma.user.update({
//       where: { id: parseInt(id) },
//      data = {
//       fullname: fullname,
//       username: username,
//       address: address,
//       password: "123456 ",
//       accountType: ACCOUNT_TYPE.SYSTEM,
//       avatar: avatar,
//       phone: phone,
//     };
//     });
//     return result;
//   } catch (error) {
//     console.error("❌ Lỗi khi xem chi tiết user:", error);
//     throw error;
//   }
// };

export {
  getAllUsers,
  createUser,
  deleteUser,
  detailUserService,
  // updatelUserService,
  getAllRoles,
  hashPassword,
  deleteAdminUser,
};
