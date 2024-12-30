export const HeaderPage = ({ title }: { title: string }) => {
  return (
    <div className="relative p-layout flex items-center w-full h-[450px] md:h-[650px] lg:h-screen overflow-hidden ">
      <h4 className="font-black text-5xl md:text-6xl lg:text-8xl text-lead-color">
        {title}
      </h4>
    </div>
  );
};
