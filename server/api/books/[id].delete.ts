import { PrismaClient } from "@prisma/client";
import { serverSupabaseUser } from "#supabase/server";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  if (!user) throw new Error("Unauthenticated");
  const bookDb = await prisma.books.deleteMany({
    where: {
      user_id: user.id,
      id: BigInt(event.context.params!.id),
    },
  });
  return bookDb.count > 0;
});
