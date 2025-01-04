export const ErrorBoundary = ({ message }: { message: string }) => {
  return (
    <div className="py-8 md:py-10 flex flex-col w-full ">
      <div className="p-4 md:p-6 lg:p-8 flex flex-col items-center gap-1.5 lg:gap-3 rounded-2xl ">
        <h6 className="font-medium text-center text-moderate-size text-moderate-color">
          Terjadi Kesalahan
        </h6>
        <p className="text-center text-descriptive-size text-red-500">
          {message}
        </p>
      </div>
    </div>
  );
};
