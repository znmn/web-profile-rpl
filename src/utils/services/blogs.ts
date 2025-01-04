import { fetchApi } from "./fetch_api";
type BlogResponse = {
  data: Blog[];
  page: number;
  size: number;
  total: number;
};

export type Blog = {
  id: number;
  title: string;
  image: string;
  content: string;
  is_active: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export const getBlogs = async (query?: string) => {
  const queryParams = (query && `&search=${query}`) || "";

  const res = await fetchApi<BlogResponse>(`/posts?page=1${queryParams}`);

  return res;
};
