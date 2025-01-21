"use client";

import { useQuery } from "@/utils/hooks/useQuery";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BlogSearch = () => {
  const { query, handleSearch, onSearch } = useQuery();

  return (
    <div className="flex-1 flex flex-row items-center justify-end gap-2 md:gap-4">
      <div className="relative flex items-center w-[180px] md:w-[320px] h-[36px] md:h-[42px] rounded-xl md:rounded-2xl ">
        <input
          type="text"
          name="search"
          placeholder="Cari Blog"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={query}
          className="px-3 md:px-5 py-1.5 md:py-2 w-full rounded-xl md:rounded-2xl border border-gray-300 focus:border-primary/60 outline-none bg-bgLight hover:bg-gray-200 focus:bg-bgLight text-sm md:text-base lg:text-lg text-gray-700  duration-300"
        />
      </div>
      <button
        onClick={onSearch}
        className="group px-3 md:px-5 py-1.5 md:py-3 rounded-xl md:rounded-2xl bg-bgLight hover:bg-primary duration-300"
      >
        <FontAwesomeIcon
          icon={faSearch}
          className="w-4 lg:w-5 h-4 lg:h-5 text-gray-800 group-hover:text-gray-200 duration-300"
        />
      </button>
    </div>
  );
};
