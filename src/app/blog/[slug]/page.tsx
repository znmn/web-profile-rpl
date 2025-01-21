import { DetailBlogContent } from "@/app/blog/[slug]/components/detail_blog_content";
import { DetailBlogHeader } from "@/app/blog/[slug]/components/detail_blog_header";
import { getBlog } from "@/utils/services/blog";
import { DetailBlogNotFound } from "./components/boundary/detail_blog_not_found";
import { ErrorBoundary } from "@/components/boundary/error";

export default async function DetailBlog({
  params,
}: {
  params: { slug: string };
}) {
  const res = await getBlog(params.slug);

  return (
    <div className="p-layout p-container flex flex-col items-center gap-4 lg:gap-6 w-full ">
      {res.success ? (
        res.data ? (
          <>
            <DetailBlogHeader title={res.data!.title} image={res.data!.image} />
            <DetailBlogContent
              time={res.data!.createdAt}
              content={res.data!.content}
            />
          </>
        ) : (
          <DetailBlogNotFound />
        )
      ) : (
        <ErrorBoundary message={res.message} />
      )}
    </div>
  );
}
