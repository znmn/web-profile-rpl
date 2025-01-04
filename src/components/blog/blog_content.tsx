import { getBlogs } from "@/utils/services/blogs";
import { BlogCard } from "./blog_card";
import { BlogNotFound } from "../boundary/blog_boundary/blog_not_found";
import { ErrorBoundary } from "../boundary/error";

export const BlogContent = async (props: { query?: string }) => {
  const res = await getBlogs(props.query);

  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center gap-y-4 md:items-start md:justify-between md:gap-y-6 lg:gap-y-10 w-full ">
      {res.success ? (
        res.total < 1 ? (
          <BlogNotFound />
        ) : (
          res.data.map((blog, idx) => (
            <BlogCard
              key={idx}
              title={blog.title}
              image={blog.image}
              content={blog.content}
              slug={blog.slug}
              createdAt={blog.createdAt}
            />
          ))
        )
      ) : (
        <ErrorBoundary message={res.message} />
      )}
    </div>
  );
};
