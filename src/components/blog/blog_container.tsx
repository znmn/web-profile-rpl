import { BlogContent } from "./blog_content";
import { BlogHeader } from "./blog_header";

export const BlogContainer = (props: { query?: string }) => {
  return (
    <div className="p-layout p-container flex flex-col items-center gap-4 md:gap-6 w-full ">
      <BlogHeader />
      <BlogContent query={props.query} />
    </div>
  );
};
