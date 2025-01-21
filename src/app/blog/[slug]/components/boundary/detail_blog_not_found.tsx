"use client";

import { NotFound } from "@/components/boundary/not_found";
import { useRouter } from "next/navigation";

export const DetailBlogNotFound = () => {
  const router = useRouter();

  return (
    <NotFound message="Blog tidak ditemukan">
      <button
        onClick={() => router.back()}
        className="text-center text-descriptive-size text-lead-color underline"
      >
        Kembali ke halaman sebelumnya
      </button>
    </NotFound>
  );
};
