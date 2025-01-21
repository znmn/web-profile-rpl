import { DetailBlogContent } from "@/app/blog/[slug]/components/detail_blog_content";
import { DetailBlogHeader } from "@/app/blog/[slug]/components/detail_blog_header";
import { getBlog } from "@/utils/services/blog";
import { DetailBlogNotFound } from "./components/boundary/detail_blog_not_found";

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
        <DetailBlogNotFound />
      )}
    </div>
  );
}
