"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

export default function FullImage() {
  const fullImageWrapper = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const fullImageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: fullImageWrapper.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          markers: false,
          pin: true,
        },
        defaults: {
          duration: 3,
        },
      });

      fullImageTimeline
        .to(fullImageWrapper.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        })
        .fromTo(".full-image", { scale: 1.3 }, { scale: 1 }, 0)
        .fromTo(".full-image-overlay", { opacity: 0 }, { opacity: 1 }, 0)
        .fromTo(
          ".full-image-text",
          { opacity: 0, y: 32, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1 },
          0.5
        );
    },
    { scope: fullImageWrapper }
  );

  return (
    <section
      ref={fullImageWrapper}
      className="full-image-wrapper relative min-h-screen w-full overflow-hidden"
      style={{
        clipPath: "polygon(5% 10%, 95% 10%, 95% 90%, 5% 90%)",
      }}
    >
      <Image
        priority
        src={"/images/full.jpg"}
        alt=""
        fill
        className="full-image absolute inset-0 object-cover"
      />

      <div className="full-image-overlay absolute inset-0 bg-neutral-900/50"></div>

      <div className="full-image-text absolute inset-0 mx-auto flex max-w-4xl flex-col justify-center gap-4 text-left text-neutral-100">
        <h3 className="text-8xl tracking-tight">2025 collection</h3>
        <p className="text-3xl">
          Our new collection is everything you need for your next adventure.
          Made to be flexible, breathable and long lasting so you can enjoy more
          of the #OutdoorLiving.
        </p>
      </div>
    </section>
  );
}
