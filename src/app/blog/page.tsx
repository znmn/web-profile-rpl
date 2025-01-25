import { HeaderPage } from "@/components/container/header_page";
import { BlogContainer } from "./components/blog_container";
import { PagePresence } from "@/components/motion/page_presence";

export default function Blog(props: {
  searchParams: { query?: string; page?: string };
}) {
  const searchParams = props.searchParams;
  const query = searchParams?.query;
  const page = searchParams?.page;

  return (
    <PagePresence>
      <HeaderPage title="BLOG" />
      <BlogContainer query={query} page={page} />
    </PagePresence>
  );
}
