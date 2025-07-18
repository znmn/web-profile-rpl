"use client";

import { usePage } from "@/utils/hooks/usePage";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type BlogPageBtnProps = {
  children: React.ReactNode;
  action: () => void;
};

type BlogPaginationProps = {
  limit: number;
  total: number;
};

const BlogPageBtn = (props: BlogPageBtnProps) => {
  return (
    <button
      onClick={props.action}
      className="px-3 md:px-3.5 py-0.5 flex items-center justify-center rounded-md color-background-inverse"
    >
      <p className="font-bold text-base text-lead-color-inverse">
        {props.children}
      </p>
    </button>
  );
};
export const BlogPagination = (props: BlogPaginationProps) => {
  const { currentPage, changePage } = usePage();

  const pages = Math.ceil(props.total / props.limit);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-2 w-full ">
      {pages > 1 && (
        <BlogPageBtn action={() => changePage(currentPage - 1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </BlogPageBtn>
      )}
      {Array.from({ length: pages }, (_, idx) => (
        <BlogPageBtn key={idx} action={() => changePage(idx + 1)}>
          {idx + 1}
        </BlogPageBtn>
      ))}
      {pages > 1 && (
        <BlogPageBtn action={() => changePage(currentPage + 1)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </BlogPageBtn>
      )}
    </div>
  );
};
