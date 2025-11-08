import prisma from "./client";

const initDatabase = async () => {
  const countUser = await prisma.user.count();
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
  }
  else{
    console.log( "Da co data roi...")
}
}

export default initDatabase;
