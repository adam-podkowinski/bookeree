export interface ApiBook {
  title: string;
  subtitle?: string;
  volumeId: string;
  thumbnail: string;
  averageRating?: number;
  pageCount: number;
  authors: string[];
  description: string;
  price: {
    amount?: number;
    currencyCode?: string;
  };
  buyLink: string | undefined;
}

export interface Book extends ApiBook {
  id: bigint;
  createdAt: string;
}
