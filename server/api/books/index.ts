import { PrismaClient } from "@prisma/client";
import { transformBook } from "@/utils/bookUtils";
import { serverSupabaseUser } from "#supabase/server";

const prisma = new PrismaClient();

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  if (!user) throw new Error("Unauthenticated");
  const booksDb = await prisma.books.findMany({
    where: { user_id: user.id },
  });
  const booksPromise = booksDb.map(transformBook);
  return await Promise.all(booksPromise);
});
