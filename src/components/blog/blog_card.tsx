import { timeFormat } from "@/utils/formatter/time_format";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  image: string;
  content: string;
  slug: string;
  createdAt: string;
};

export const BlogCard = (props: BlogCardProps) => {
  const time = timeFormat(props.createdAt);

  return (
    <Link
      href={`/blog/${props.slug}`}
      className="p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4 w-full sm:w-[336px] lg:w-[380px] rounded-2xl border border-gray-300 bg-bgLight hover:shadow-2xl shadow-bgDark dark:shadow-bgLight duration-300"
    >
      <div className="relative w-full h-[160px] md:h-[180px] lg:h-[200px] rounded-xl overflow-hidden ">
        <img src={props.image} alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-bgDark/20 to-transparent duration-300"></div>
      </div>
      <div className="flex flex-col gap-4 md:gap-5 w-full">
        <h3 className="font-bold text-gray-900 duration-300 text-lg md:text-xl lg:text-2xl">
          {props.title}
        </h3>
        <h6 className="font-medium text-gray-700 duration-300 text-descriptive-size 2xl:text-lg">
          {time}
        </h6>
        <p className="font-medium text-gray-800 duration-300 text-descriptive-size 2xl:text-lg line-clamp-3">
          {props.content}
        </p>
      </div>
    </Link>
  );
};
