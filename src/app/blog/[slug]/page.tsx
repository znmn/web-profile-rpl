import { BlogNotFound } from "@/components/detail_blog/blog_not_found";
import { DetailBlogContent } from "@/components/detail_blog/detail_blog_content";
import { DetailBlogHeader } from "@/components/detail_blog/detail_blog_header";
import { getBlog } from "@/utils/services/blog";

export default async function DetailBlog({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);

  return (
    <div className="p-layout p-container flex flex-col items-center gap-4 lg:gap-6 w-full ">
      {blog ? (
        <>
          <DetailBlogHeader title={blog!.title} image={blog!.image} />
          <DetailBlogContent time={blog!.createdAt} content={blog!.content} />
        </>
      ) : (
        <BlogNotFound />
      )}
    </div>
  );
}
