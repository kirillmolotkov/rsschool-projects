export interface RequsetParameters {
  apiKey: string;
  category: string;
  language: string;
  country: string;
  status: string;
  sources: Array<{
    category: string,
    country:  string,
    description: string,
    id: string,
    language: string,
    name: string,
    url: string,
}>
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
  articles: Array<{
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