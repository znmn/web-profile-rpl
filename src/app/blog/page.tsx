import { HeaderPage } from "@/components/container/header_page";
import { BlogContainer } from "./components/blog_container";

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
