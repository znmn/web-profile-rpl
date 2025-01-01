type DetailBlogContentProps = {
  time: string;
  content: string;
};

export const DetailBlogContent = (props: DetailBlogContentProps) => {
  return (
    <div className="flex flex-col gap-4 w-full ">
      <p className="font-normal text-descriptive-size text-descriptive-color">
        {props.time}
      </p>
      <p className="font-normal text-descriptive-size text-moderate-color">
        {props.content}
      </p>
    </div>
  );
};
