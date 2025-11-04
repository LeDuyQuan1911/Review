import getConnection from "../config/database";
import mysql from "mysql2/promise";

const handleCreateUser = (username: string, age: number) => {
  console.log(username, age);
};

const getAllUsers = async () => {
  const connection = await getConnection();
  try {
    const [results] = await connection.query("SELECT * FROM `users` ");
    return results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const createUser = async (name, email, address) => {
  const connection = await getConnection();
  try {
    const sql =
      "INSERT INTO `users` (`name`, `email`, `address`) VALUES (?, ?, ?)";
    const [result] = await connection.execute(sql, [name, email, address]);
    return result;
  } catch (err) {
    console.error("❌ Error inserting user:", err);
    return null;
  }
};

const deleteUser = async (id) => {
  const connection = await getConnection();
  try {
    const sql = "DELETE FROM users WHERE id= ?";
    const [result] = await connection.query(sql, [id]);
    return result;
  } catch (error) {
    console.error("Lỗi khi xóa user:", error);
    throw error;
  }
};

const detailUserService = async (id) => {
  const connection = await getConnection();
  try {
    const sql = "SELECT * FROM users WHERE id= ?";
    const [result] = await connection.query(sql, [id]);
    return result;
  } catch (error) {
    console.error("Lỗi khi xem chi tiet user:", error);
    throw error;
  }
};

export {
  handleCreateUser,
  getAllUsers,
  createUser,
  deleteUser,
  detailUserService,
};
