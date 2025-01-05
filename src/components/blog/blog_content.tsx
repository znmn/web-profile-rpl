import { getBlogs } from "@/utils/services/blogs";
import { BlogCard } from "./blog_card";
import { BlogNotFound } from "../boundary/blog_boundary/blog_not_found";
import { ErrorBoundary } from "../boundary/error";
import { BlogPagination } from "./blog_pagination";

export const BlogContent = async (props: { query?: string; page?: string }) => {
  const res = await getBlogs(props.query, props.page);

  return (
    <div className="flex flex-col items-center gap-4 md:gap-8 ">
      {res.success ? (
        res.total < 1 ? (
          <BlogNotFound />
        ) : (
          <>
            <div className="flex flex-col md:flex-row flex-wrap items-center gap-y-4 md:items-start md:justify-between md:gap-y-6 lg:gap-y-10 w-full ">
              {res.data.map((blog, idx) => (
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
            <BlogPagination limit={10} total={res.total} />
          </>
        )
      ) : (
        <ErrorBoundary message={res.message} />
      )}
    </div>
  );
};
