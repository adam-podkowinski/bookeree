import { PrismaClient } from "@prisma/client";
import { Book } from "~~/types";
import { transformBook } from "~~/utils/bookUtils";

const prisma = new PrismaClient();

export default defineEventHandler(async (event): Promise<Book> => {
  if (!event.context.authenticated) throw new Error("Unauthenticated");
  const body = await readBody(event);
  const bookFromDb = await prisma.books.create({
    data: { user_id: event.context.user.id, volume_id: body.volumeId },
  });
  const book = await transformBook(bookFromDb);
  return book;
});
