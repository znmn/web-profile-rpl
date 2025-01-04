import { BlogSearch } from "./blog_search";

export const BlogHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full ">
      <h4 className="font-bold text-lead-size text-lead-color">BLOG TERBARU</h4>
      <BlogSearch />
    </div>
  );
};
