import { PrismaClient } from "@prisma/client";
import { transformBook } from "@/utils/bookUtils";
import { serverSupabaseUser } from "#supabase/server";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  if (!user) throw new Error("Unauthenticated");
  const bookDb = await prisma.books.findFirst({
    where: {
      user_id: user.id,
      id: BigInt(event.context.params!.id),
    },
  });
  if (!bookDb) return new Error("Not found!");
  const bookPromise = transformBook(bookDb);
  return await bookPromise;
});
