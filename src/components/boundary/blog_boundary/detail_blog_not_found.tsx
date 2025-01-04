"use client";

import { useRouter } from "next/navigation";
import { BlogNotFound } from "./blog_not_found";

export const DetailBlogNotFound = () => {
  const router = useRouter();

  return (
    <BlogNotFound>
      <button
        onClick={() => router.back()}
        className="text-center text-descriptive-size text-lead-color underline"
      >
        Kembali ke halaman sebelumnya
      </button>
    </BlogNotFound>
  );
};
