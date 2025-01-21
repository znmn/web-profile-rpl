type BlogResponse = {
  success: boolean;
  message: string;
  data?: Blog;
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

import { fetchApi } from "./fetch_api";

export const getBlog = async (slug: string) => {
  const res = await fetchApi<BlogResponse>(`/posts/${slug}`);

  return res;
};
