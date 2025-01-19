import Image, { StaticImageData } from "next/image";

type ImageContainerProps = {
  image: StaticImageData;
  alt: string;
};

export const ImageContainer = (props: ImageContainerProps) => {
  return (
    <div className="p-layout py-8 md:py-12 lg:py-20 flex items-center justify-center w-full h-[450px] md:h-[650px] lg:h-screen overflow-hidden duration-300">
      <Image src={props.image} alt={props.alt} objectFit="cover" />
    </div>
  );
};
