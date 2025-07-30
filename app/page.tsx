import FullImage from "@/components/FullImage";
import Hero from "@/components/Hero";
import TextBlock from "@/components/TextBlock";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <main className="bg-neutral-100 text-neutral-900">
      <ReactLenis root />
      <Hero />
      <TextBlock />
      <FullImage />
    </main>
  );
}
