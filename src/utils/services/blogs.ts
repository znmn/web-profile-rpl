type BlogResponse = {
  success: boolean;
  message: string;
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

export const getBlogs = async () => {
  try {
    const res = await fetch(
      "http://localhost:3000/api/admin/posts?limit=10&page=1"
    );

    const data: BlogResponse = await res.json();

    return data.data;
  } catch (e: unknown) {
    console.error(`Failed on Fetch Galleries, error message : ${e}`);

    return [];
  }
};
