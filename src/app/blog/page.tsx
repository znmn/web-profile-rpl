import { BlogContainer } from "@/components/blog/blog_container";
import { HeaderPage } from "@/components/container/header_page";

export default function Blog(props: {
  searchParams: { query?: string; page?: string };
}) {
  const searchParams = props.searchParams;
  const query = searchParams?.query;
  const page = searchParams?.page;

  return (
    <>
      <HeaderPage title="BLOG" />
      <BlogContainer query={query} page={page} />
    </>
  );
}
