export interface Book {
  title: string;
  subtitle: string;
  id: bigint;
  volumeId: string;
  thumbnail: string;
  averageRating?: number;
  pageCount: number;
  authors: string[];
  description: string;
  createdAt: string;
  price: {
    amount: number;
    currencyCode: string;
  };
  buyLink: string | undefined;
}
