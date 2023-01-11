import { PrismaClient } from "@prisma/client";
import { getServerSession, getToken } from "#auth";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);
  const token = await getToken({ event });
  const book = await prisma.books.findFirst();
  return {
    email: session?.user?.email,
    user_id: token?.sub,
    firstBook: book?.library_id,
  };
});
