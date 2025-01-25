import { HeaderPage } from "@/components/container/header_page";
import { ImageContainer } from "./components/container/image_container";
import ryperLabIntro from "../../../public/RyperLab_Introduction.webp";
import { Structure } from "./components/structure";
import { Courses } from "./components/courses";
import { History } from "./components/history";
import { PagePresence } from "@/components/motion/page_presence";

export default function Page() {
  return (
    <PagePresence>
      <HeaderPage title="Tentang Kami" />
      <ImageContainer image={ryperLabIntro} alt="Logo RyperLabe" />
      <History />
      <Structure />
      <Courses />
    </PagePresence>
  );
}
