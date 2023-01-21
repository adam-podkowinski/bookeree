import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  if (!event.context.authenticated) throw new Error("Unauthenticated");
  const bookDb = await prisma.books.deleteMany({
    where: {
      user_id: event.context.user.id,
      id: BigInt(event.context.params.id),
    },
  });
  return bookDb.count > 0;
});
