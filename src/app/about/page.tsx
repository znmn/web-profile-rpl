import { HeaderPage } from "@/components/container/header_page";
import { ImageContainer } from "./components/image_container";
import ryperLabIntro from "../../../public/RyperLab_Introduction.webp";
import ryperLabHistory from "../../../public/RyperLab_History.webp";

export default function Page() {
  return (
    <>
      <HeaderPage title="Tentang Kami" />
      <ImageContainer image={ryperLabIntro} alt="Logo RyperLabe" />
      <ImageContainer image={ryperLabHistory} alt="Logo RyperLabe" />
    </>
  );
}
