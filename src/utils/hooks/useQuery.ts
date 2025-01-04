import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQuery = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams.toString());
  const query = searchParams.get("query")?.toString();

  const handleSearch = (query: string) => {
    query ? params.set("query", query) : params.delete("query");
  };

  const onSearch = () => {
    replace(`${pathname}?${params.toString()}`);
  };

  return {
    query,
    handleSearch,
    onSearch,
  };
};
