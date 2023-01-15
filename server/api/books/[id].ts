import { PrismaClient } from "@prisma/client";
import { transformBook } from "@/utils/transformBook";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  if (!event.context.authenticated) throw new Error("Unauthenticated");
  const bookDb = await prisma.books.findFirst({
    where: { user_id: event.context.user.id, id: BigInt(event.context.params.id)},
  });
  if (!bookDb) return new Error("Not found!");
  const bookPromise = transformBook(bookDb);
  const book = await bookPromise;
  return book;
});
