import { PrismaClient } from "@prisma/client";
import { serverSupabaseUser } from "#supabase/server";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const u = await serverSupabaseUser(event);
  if (!u) return "ERROR";
  const user = await prisma.users.findFirst({ where: { id: u.id } });
  return { user };
});
