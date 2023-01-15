import { books, PrismaClient } from "@prisma/client";
import { Book } from "@/utils/Book";

const transformBook = async (item: books): Promise<Book> => {
  const data: any = await $fetch(`${GOOGLE_URL}/volumes/${item.volume_id}`);
  return {
    id: data.id,
    title: data.volumeInfo.title,
    subtitle: data.volumeInfo.subtitle,
    authors: data.volumeInfo.authors,
    description: data.volumeInfo.description,
    averageRating: data.volumeInfo.averageRating,
    pageCount: data.volumeInfo.pageCount,
    thumbnail: data.volumeInfo.imageLinks.thumbnail,
    buyLink: data.saleInfo.buyLink,
    createdAt: item.created_at,
    price: {
      amount: data.saleInfo.retailPrice.amount,
      currencyCode: data.saleInfo.retailPrice.currencyCode,
    },
  };
};

const GOOGLE_URL = "https://www.googleapis.com/books/v1";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  if (!event.context.authenticated) throw new Error("Unauthenticated");
  const booksDb = await prisma.books.findMany({
    where: { user_id: event.context.user.id },
  });
  const booksPromise = booksDb.map(transformBook);
  const books = await Promise.all(booksPromise);
  return books;
});
