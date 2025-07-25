export const MenuBtn = (props: { action: () => void }) => {
  return (
    <button
      onClick={props.action}
      className="py-3 flex flex-col justify-start gap-1.5 "
    >
      <div className="w-8 h-[3px] rounded-full bg-gray-900 dark:bg-gray-100 duration-300"></div>
      <div className="w-8 h-[3px] rounded-full bg-gray-900 dark:bg-gray-100 duration-300"></div>
      <div className="w-8 h-[3px] rounded-full bg-gray-900 dark:bg-gray-100 duration-300"></div>
    </button>
  );
};
