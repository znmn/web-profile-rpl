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

export const getBlogs = async (query?: string, page?: string) => {
  const queryParams = (query && `&search=${query}`) || "";
  const pageParams = page || "1";

  const res = await fetchApi<BlogResponse>(
    `/posts?page=${pageParams}&&${queryParams}`
  );

  return res;
};
