// import bcrypt from "bcrypt";
// import prismadb from "@/lib/prismadb";
// import { NextApiResponse, NextApiRequest } from "next";
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//     console.log('working in api',req);

//   if (req.method !== "POST") {
//     res.status(405).json({msg:'runnig'});
//   }
//   try {
//     const { email, name, password } = req.body;
//     const existingUser = await prismadb.findUnique({
//       where: {
//         email,
//       },
//     });
//     if (existingUser) {
//       return res.status(422).json({ error: "Email is already in use" });
//     }
//     const hashedPasssword = await bcrypt.hash(password, 12);
//     const user = await prismadb.user.create({
//       data: {
//         email,
//         name,
//         hashedPasssword,
//         image: "",
//         emailVerified: new Date(),
//       },
//     });
//     return res.status(201).json(user);
//   } catch (error) {
//     console.log(error);
//     res.status(400).end();
//   }
// }
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextApiResponse, NextApiRequest } from "next";

const prismadb = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("working in api", req);

  if (req.method !== "POST") {
    res.status(405).json({ msg: "Method Not Allowed" });
    return;
  }

  try {
    const { email, name, password } = req.body;
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return res.status(422).json({ error: "Email is already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  } finally {
    await prismadb.$disconnect();
  }
}
