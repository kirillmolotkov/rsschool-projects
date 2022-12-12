export interface RequsetParameters {
  apiKey: string;
  category: string;
  language: string;
  country: string;
}

export interface ResponseObject {
  status: string;
  sources: Array<object>;
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}