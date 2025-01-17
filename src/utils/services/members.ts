import { fetchApi } from "./fetch_api";
type MemberResponse = {
  data: Member[];
  page: number;
  size: number;
  total: number;
};

export type Member = {
  id: number;
  name: string;
  image: string;
  position: string;
  is_active: boolean;
};

export const getMembers = async () => {
  const res = await fetchApi<MemberResponse>(`/members?page=1&limit=100`);

  return res;
};
