import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  if (!event.context.authenticated) throw new Error("Unauthenticated");
  const booksDb = await prisma.books.findMany({
    where: { user_id: event.context.user.id },
  });
  return booksDb.length;
});
