import { books } from "@prisma/client";
import type { Book, ApiBook } from "@/types";

const GOOGLE_URL = "https://www.googleapis.com/books/v1";

export const transformBookApi = (item: any): ApiBook => {
  return {
    volumeId: item.id,
    title: item.volumeInfo.title,
    subtitle: item.volumeInfo.subtitle,
    authors: item.volumeInfo.authors,
    description: item.volumeInfo.description,
    averageRating: item.volumeInfo.averageRating,
    pageCount: item.volumeInfo.pageCount,
    thumbnail: item.volumeInfo.imageLinks.thumbnail,
    buyLink: item.saleInfo?.buyLink,
    price: {
      amount: item.saleInfo.retailPrice?.amount,
      currencyCode: item.saleInfo.retailPrice?.currencyCode,
    },
  };
};

export const transformBook = async (item: books): Promise<Book> => {
  const data: any = await $fetch(`${GOOGLE_URL}/volumes/${item.volume_id}`);
  const apiBook: ApiBook = transformBookApi(data);
  const book: Book = {
    ...apiBook,
    id: item.id,
    createdAt: item.created_at.toISOString(),
  };
  return book;
};
