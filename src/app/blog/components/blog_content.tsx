import { getBlogs } from "@/utils/services/blogs";
import { BlogCard } from "./card/blog_card";
import { BlogPagination } from "./blog_pagination";
import { ErrorBoundary } from "@/components/boundary/error";
import { NotFound } from "@/components/boundary/not_found";

export const BlogContent = async (props: { query?: string; page?: string }) => {
  const res = await getBlogs(props.query, props.page);

  return (
    <div className="flex flex-col items-center gap-4 md:gap-8 ">
      {res.success ? (
        res.total < 1 ? (
          <NotFound message="Blog tidak ditemukan" />
        ) : (
          <>
            {res.size < 1 && <NotFound message="Blog tidak ditemukan" />}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 w-full">
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
