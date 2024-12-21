import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Trailing } from "./trailing";
import { FootDescription } from "./foot_description";
import { SocialMedia } from "./social_media";
import { getSettings } from "@/utils/services/settings";

export const Footer = async () => {
  const contacts = await getSettings();

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
        content={contacts![0].value}
      />
      <SocialMedia
        medias={contacts!.filter((contact) => contact.key !== "contact")}
      />
    </div>
  );
};
