import { books } from "@prisma/client";
import type { Book } from "@/types";

const GOOGLE_URL = "https://www.googleapis.com/books/v1";

export const transformBook = async (item: books): Promise<Book> => {
  const data: any = await $fetch(`${GOOGLE_URL}/volumes/${item.volume_id}`);
  return {
    id: item.id,
    volumeId: data.id,
    title: data.volumeInfo.title,
    subtitle: data.volumeInfo.subtitle,
    authors: data.volumeInfo.authors,
    description: data.volumeInfo.description,
    averageRating: data.volumeInfo.averageRating,
    pageCount: data.volumeInfo.pageCount,
    thumbnail: data.volumeInfo.imageLinks.thumbnail,
    buyLink: data.saleInfo.buyLink,
    createdAt: item.created_at.toISOString(),
    price: {
      amount: data.saleInfo.retailPrice.amount,
      currencyCode: data.saleInfo.retailPrice.currencyCode,
    },
  };
};
