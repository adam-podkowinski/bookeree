import { PrismaClient } from "@prisma/client";
import { serverSupabaseUser } from "#supabase/server";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  if (!user) throw new Error("Unauthenticated");
  const booksDb = await prisma.books.findMany({
    where: { user_id: user.id },
  });
  return booksDb.length;
});
