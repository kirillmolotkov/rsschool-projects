export interface RequsetParameters {
  apiKey: string;
  category: string;
  language: string;
  country: string;
}

export interface ResponseObject {
  status: string;
  sources: Array<{
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string,
    title: string,
    urlToImage: string,
    author: string,
    publishedAt: string,
    source: {
      name: string,
      id: string
    }
  }>;
}