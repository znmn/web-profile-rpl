import { DetailBlogContent } from "@/components/detail_blog/detail_blog_content";
import { DetailBlogHeader } from "@/components/detail_blog/detail_blog_header";
import { getBlog } from "@/utils/services/blog";

export default async function DetailBlog({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);

  console.log(blog);

  return (
    <div className="p-layout p-container flex flex-col items-cetner gap-4 lg:gap-6 w-full ">
      <DetailBlogHeader title={blog!.title} image={blog!.image} />
      <DetailBlogContent time={blog!.createdAt} content={blog!.content} />
    </div>
  );
}
