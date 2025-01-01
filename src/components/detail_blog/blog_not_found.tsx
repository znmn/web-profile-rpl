"use client";

import { useRouter } from "next/navigation";

export const BlogNotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <div className="flex flex-col items-center gap-1.5 lg:gap-3 ">
        <h6 className="font-medium text-center text-moderate-size text-moderate-color">
          Blog tidak ditemukan
        </h6>
        <button
          onClick={() => router.back()}
          className="text-center text-descriptive-size text-primary"
        >
          Kembali ke halaman sebelumnya
        </button>
      </div>
    </div>
  );
};
