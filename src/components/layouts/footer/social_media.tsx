import { FootContent } from "./foot_content";
import { Media } from "./media";

type MediasType = { key: string; value: string }[];

export const SocialMedia = ({ medias }: { medias: MediasType }) => {
  return (
    <FootContent label="Media Sosial">
      <div className="flex flex-col lg:flex-row flex-wrap gap-1 lg:gap-2 w-full ">
        {medias.map((media) => (
          <Media key={media.key} media={media} />
        ))}
      </div>
    </FootContent>
  );
};
