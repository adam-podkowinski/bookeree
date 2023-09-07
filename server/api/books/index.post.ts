import { PrismaClient } from "@prisma/client";
import { Book } from "~~/types";
import { transformBook } from "~~/utils/bookUtils";
import { serverSupabaseUser } from "#supabase/server";

const prisma = new PrismaClient();

export default defineEventHandler(async (event): Promise<Book> => {
  const user = await serverSupabaseUser(event);
  if (!user) throw new Error("Unauthenticated");
  const body = await readBody(event);
  const bookFromDb = await prisma.books.create({
    data: { user_id: user.id, volume_id: body.volumeId },
  });
  return await transformBook(bookFromDb);
});
