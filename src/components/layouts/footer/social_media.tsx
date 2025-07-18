import { Media } from "./media";

type MediasType = { key: string; value: string }[];

export const SocialMedia = ({ medias }: { medias: MediasType }) => {
  return (
    <ul className="flex items-center space-x-3 md:order-3">
      {medias.map((media) => (
        <Media key={media.key} media={media} />
      ))}
    </ul>
  );
};
