import { BlogCard } from "./blog_card";

export const BlogContent = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center gap-y-4 md:items-start md:justify-between md:gap-y-6 lg:gap-y-10 w-full ">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};
