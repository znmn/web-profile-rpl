import { fetchApi } from "./fetch_api";

type GalleriesResponse = {
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
  const res = await fetchApi<GalleriesResponse>(`/galleries?limit=100&page=1`);

  return res;
};
