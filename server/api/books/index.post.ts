import { PrismaClient, books } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event): Promise<books> => {
  if (!event.context.authenticated) throw new Error("Unauthenticated");
  const body = await readBody(event);
  const book = await prisma.books.create({
    data: { user_id: event.context.user.id, volume_id: body.volumeId },
  });
  return book;
});
