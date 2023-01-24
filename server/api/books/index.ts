import { PrismaClient } from "@prisma/client";
import { transformBook } from "@/utils/bookUtils";

const prisma = new PrismaClient();

// TODO: use prisma pick only needed fields
export default defineEventHandler(async (event) => {
  if (!event.context.authenticated) throw new Error("Unauthenticated");
  const booksDb = await prisma.books.findMany({
    where: { user_id: event.context.user.id },
  });
  const booksPromise = booksDb.map(transformBook);
  const books = await Promise.all(booksPromise);
  return books;
});
