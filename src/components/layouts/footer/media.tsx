import { useMedia } from "@/utils/hooks/useMedia";
import Link from "next/link";

type MediaProps = {
  media: { key: string; value: string };
};

export const Media = (props: MediaProps) => {
  const media = useMedia(props.media);

  return (
    <Link
      href={media.link}
      className="basis-1/3 px-2 py-2 flex flex-row items-center gap-2 w-full lg:w-fit rounded-lg border-2 border-transparent hover:border-bgLight duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox={media.viewBox}
        fill="white"
      >
        <path d={media.iconPath}></path>
      </svg>
      <p className="font-normal text-sm lg:text-md text-gray-200">
        {media.label}
      </p>
    </Link>
  );
};
