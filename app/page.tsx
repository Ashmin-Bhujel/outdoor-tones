import Hero from "@/components/Hero";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <main className="h-[200vh]">
      <ReactLenis root />
      <Hero />
    </main>
  );
}
