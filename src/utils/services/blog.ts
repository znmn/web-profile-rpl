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

export const getBlog = async (slug: string): Promise<Blog | undefined> => {
  try {
    const res = await fetch(`http://localhost:3000/api/admin/posts/${slug}`);

    const data: BlogResponse = await res.json();

    return data.data;
  } catch (e: unknown) {
    console.error(`Failed on Fetch Galleries, error message : ${e}`);

    return undefined;
  }
};
