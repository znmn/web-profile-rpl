export const BlogHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full ">
      <h4 className="font-bold text-lead-size text-lead-color">BLOG TERBARU</h4>
      <div className="flex-1 flex flex-row justify-end ">
        <div className="relativeS w-[180px] md:w-[320px] h-[36px] md:h-[42px] rounded-xl md:rounded-2xl bg-red-500">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Cari Blog"
            className="px-2 md:px-4 py-1 md:py-2 w-full rounded-xl md:rounded-2xl border border-gray-300 focus:border-primary/60 outline-none bg-bgLight hover:bg-gray-200 focus:bg-bgLight text-sm md:text-base lg:text-lg text-gray-700  duration-300"
          />
        </div>
      </div>
    </div>
  );
};
