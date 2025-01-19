import { fetchApi } from "./fetch_api";
type MemberResponse = {
  data: Member[];
  page: number;
  size: number;
  total: number;
};

export type Member = {
  id: number;
  title: string;
  image: string;
  is_active: boolean;
};

export const getCourses = async () => {
  const res = await fetchApi<MemberResponse>(`/courses?page=1&limit=100`);

  return res;
};
