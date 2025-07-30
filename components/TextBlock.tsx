"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextBlock() {
  const textBlock = useRef(null);

  useGSAP(
    () => {
      const textContent = new SplitText(".text-content", {
        type: "lines",
        autoSplit: true,
        mask: "lines",
      });
      const textAnimationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: textBlock.current,
          start: "top 25%",
          end: "bottom center",
          scrub: true,
          markers: false,
        },
      });

      textAnimationTimeline.from(textContent.lines, {
        y: 32,
        opacity: 0,
        ease: "expo.out",
        duration: 3,
        stagger: {
          amount: 1,
        },
      });

      return () => {
        textContent.revert();
      };
    },
    {
      scope: textBlock,
    }
  );

  return (
    <section ref={textBlock} className="flex min-h-screen w-full items-center">
      <p className="text-content max-w-[44ch] px-16 text-justify text-5xl leading-snug tracking-tight">
        Outdoor Tones is committed to motivating everyone to embrace the
        outdoors. We believe that seeking the thrill of outdoor exploration is
        key to our health. That&apos;s why we&apos;e empowering you to feel
        confident, vibrant, and primed for #OutdoorLiving at its finest.
      </p>
    </section>
  );
}
