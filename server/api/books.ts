import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  if (!event.context.authenticated) return (event.node.res.statusCode = 401);
  const booksDb = await prisma.users
    .findFirst({ where: { id: event.context.user.id } })
    .books();
  return booksDb;
});
