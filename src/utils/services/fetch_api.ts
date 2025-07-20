import { Failed, Success } from "./types";

export const fetchApi = async <T = any>(
  routes: string
): Promise<Success<T> | Failed> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin${routes}`);

    const data: Success = await res.json();

    return data;
  } catch (e: unknown) {
    console.error(`Failed on Fetch data, error message : ${e}`);

    return {
      success: false,
      message: String(e),
    };
  }
};
