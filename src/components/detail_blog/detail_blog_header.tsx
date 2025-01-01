type DetailBlogHeaderProps = {
  title: string;
  image: string;
};

export const DetailBlogHeader = (props: DetailBlogHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-6 w-full ">
      <h6 className="font-bold text-center text-lead-size text-lead-color">
        {props.title}
      </h6>
      <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] xl:h-[700px] overflow-hidden rounded-xl ">
        <img src={props.image} alt="" className="w-full h-full " />
        <div className="absolute inset-0 bg-gradient-to-t from-bgDark/30 to-transparent duration-300"></div>
      </div>
    </div>
  );
};
