import prisma from "./client";

const initDatabase = async () => {
  const countUser = await prisma.user.count();
  const countRole = await prisma.role.count();
  if (countUser === 0) {
    await prisma.user.createMany({
      data: [
        {
          username: "123",
          password: "",
          accountType: "",
        },
        {
          username: "1234",
          password: "",
          accountType: "",
        },
      ],
    });
  } else if (countRole === 0) {
    await prisma.role.createMany({
      data: [
        {
          name: "ADMIN",
          description: "Admin thi full quyen",
        },
        {
          name: "USER",
          description: "User thong thuong",
        },
      ],
    });
  } else {
    console.log("Da co data roi...");
  }
};

export default initDatabase;
