import { Trailing } from "./trailing";
import { SocialMedia } from "./social_media";
import { getSettings } from "@/utils/services/settings";

export const Footer = async () => {
  const contacts = await getSettings();

  return (
    <section className="py-10 bg-primary ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-wrap items-center justify-between">
          <Trailing />

          <SocialMedia
            medias={contacts!.filter((contact) => contact.key !== "contact")}
          />

          <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
            © Copyright 2025, All Rights Reserved by RyperLab
          </p>
        </div>
      </div>
    </section>
  );
};
