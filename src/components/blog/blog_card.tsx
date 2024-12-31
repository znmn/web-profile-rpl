type BlogCardProps = {
  title: string;
  image: string;
  content: string;
  slug: string;
  createdAt: string;
};

export const BlogCard = (props: BlogCardProps) => {
  return (
    <div className="p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4 w-full sm:w-[336px] lg:w-[380px] rounded-2xl border border-bgDark bg-bgLight">
      <div className="relative w-full h-[160px] md:h-[180px] lg:h-[200px] rounded-xl overflow-hidden ">
        <img
          // src="https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-0.3.5&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&s=2bc67e5c6ee0e90d892e35a7652fe6c9?momo_cache_bg_uuid=d4879cd2-a3e7-4d24-a8cb-3bbe46688b0f"
          src={props.image}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bgDark/20 to-transparent duration-300"></div>
      </div>
      <div className="flex flex-col gap-4 md:gap-5 w-full">
        <h3 className="font-bold text-gray-900 duration-300 text-lg md:text-xl lg:text-2xl">
          {props.title}
        </h3>
        <h6 className="font-medium text-gray-700 duration-300 text-descriptive-size 2xl:text-lg">
          {props.createdAt}
        </h6>
        <p className="font-medium text-gray-800 duration-300 text-descriptive-size 2xl:text-lg line-clamp-3">
          {props.content}
        </p>
      </div>
    </div>
  );
};
