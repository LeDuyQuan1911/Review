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

const createUser = async (name, email, address) => {
  try {
    const data = {
      name: name,
      email: email,
      address: address,
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
      data: { name, email, address },
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
};
