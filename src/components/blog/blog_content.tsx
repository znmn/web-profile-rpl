import { getBlogs } from "@/utils/services/blogs";
import { BlogCard } from "./blog_card";

export const BlogContent = async () => {
  const blogs = await getBlogs();

  console.log(blogs);

  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center gap-y-4 md:items-start md:justify-between md:gap-y-6 lg:gap-y-10 w-full ">
      {blogs.map((blog, idx) => (
        <BlogCard
          key={idx}
          title={blog.title}
          image={blog.image}
          content={blog.content}
          slug={blog.slug}
          createdAt={blog.createdAt}
        />
      ))}
    </div>
  );
};
