type CourseCardProps = {
  title: string;
  image: string;
  action: () => void;
  isSelected: boolean;
};

export const CourseCard = (props: CourseCardProps) => {
  return (
    <div
      onClick={props.action}
      className="flex-shrink-0 relative flex flex-col items-center justify-end w-[170px] md:w-[270px] h-[190px] md:h-[310px] rounded-2xl overflow-hidden border border-bgDark/45 cursor-pointer"
    >
      <div className="absolute inset-0 w-full h-full ">
        <img
          src={props.image}
          alt="Mata Kuliah RyperLab"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-3 py-2 flex flex-col items-center justify-center w-full min-h-[40px] z-30 bg-bgLight">
        <p className="text-descriptive-size text-center text-primary">
          {props.title}
        </p>
      </div>
    </div>
  );
};
