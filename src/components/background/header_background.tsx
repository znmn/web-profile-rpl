import { Header1 } from "./header_decoration/header_1";
import { Header2 } from "./header_decoration/header_2";
import { Header3 } from "./header_decoration/header_3";

export const HeaderBackground = () => {
  return (
    <div className="absolute flex flex-row inset-0 w-full h-full z-30 ">
      <Header3 />
      <Header2 />
      <Header1 />
    </div>
  );
};
