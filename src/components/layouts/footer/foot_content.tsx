type FootContentProps = {
  label: string;
  children: React.ReactNode;
};

export const FootContent = (props: FootContentProps) => {
  return (
    <div className="flex flex-col gap-2 lg:gap-2 w-full lg:w-fit ">
      <h6 className="font-medium text-md lg:text-lg text-gray-100">
        {props.label}
      </h6>
      {props.children}
    </div>
  );
};
