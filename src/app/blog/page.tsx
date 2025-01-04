import { BlogContainer } from "@/components/blog/blog_container";
import { HeaderPage } from "@/components/container/hader_page";

export default function Blog(props: { searchParams: { query?: string } }) {
  const searchParams = props.searchParams;
  const query = searchParams?.query;

  return (
    <>
      <HeaderPage title="BLOG" />
      <BlogContainer query={query} />
    </>
  );
}
