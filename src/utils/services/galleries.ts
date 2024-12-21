type Galleries = {
  success: boolean;
  message: string;
  data: Image[];
  page: number;
  size: number;
  total: number;
};

export type Image = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  is_active: boolean;
};

export const getGalleries = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/admin/galleries");

    const data: Galleries = await res.json();

    return data.data;
  } catch (e: unknown) {
    console.error(`Failed on Fetch Galleries, error message : ${e}`);

    return [];
  }
};
