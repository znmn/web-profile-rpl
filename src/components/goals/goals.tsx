import { Mission } from "./mission";
import { Vision } from "./vision";

export const Goals = () => {
  return (
    <div className="flex flex-col items-center gap-10 md:gap-16 lg:gap-20 ">
      <Vision />
      <Mission />
    </div>
  );
};
