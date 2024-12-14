import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Trailing } from "./trailing";
import { FootDescription } from "./foot_description";
import { SocialMedia } from "./social_media";

export const Footer = () => {
  return (
    <div className="px-8 py-9 flex flex-col lg:flex-row gap-9 lg:gap-52 w-full min-h-[257px] lg:min-h-fit bg-primary">
      <Trailing />
      <FootDescription
        icon={faLocationDot}
        label="Lokasi"
        content="Gedung B. Fakultas Ilmu Komputer"
      />
      <FootDescription
        icon={faEnvelope}
        label="Kontak Kami"
        content="LabRPL@gmail.com"
      />
      <SocialMedia />
    </div>
  );
};
