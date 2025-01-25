import { Goals } from "@/app/(home)/components/goals/goals";
import { Hero } from "@/app/(home)/components/hero/hero";
import { PagePresence } from "@/components/motion/page_presence";

export default function Home() {
  return (
    <PagePresence>
      <Hero />
      <Goals />
    </PagePresence>
  );
}
