import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const usePage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams.toString());
  const currentPage = Number(searchParams.get("page")?.toString() || "1");

  const changePage = (page: number) => {
    page ? params.set("page", String(page)) : params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  };

  return {
    currentPage,
    changePage,
  };
};
