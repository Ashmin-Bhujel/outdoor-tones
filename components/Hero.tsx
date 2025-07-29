"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const heroSection = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(
    () => {
      // Split hero title text into chars
      const heroTitle = SplitText.create(".hero-title", {
        type: "chars",
      });

      // Intro animation
      const introTimeline = gsap.timeline();
      introTimeline
        .fromTo(
          heroTitle.chars,
          {
            opacity: 0,
            y: 64,
          },
          {
            opacity: 1,
            y: 0,
            delay: 0.5,
            duration: 2,
            stagger: 0.01,
            ease: "expo.out",
          }
        )
        .fromTo(
          ".hero-image",
          {
            opacity: 0,
            y: gsap.utils.random(50, 100),
          },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            stagger: 0.04,
            ease: "power3.out",
          },
          0.5
        );

      // Parallax hero images animation
      const parallaxTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      });
      const heroImages = gsap.utils.toArray(".hero-image");
      heroImages.forEach((heroImage) => {
        parallaxTimeline.to(
          heroImage as gsap.TweenTarget,
          {
            scale: 1.5,
            y: gsap.utils.random(-100, -50),
            ease: "none",
          },
          0
        );
      });
    },
    {
      scope: heroSection,
      dependencies: [],
    }
  );

  return (
    <section
      ref={heroSection}
      className="relative flex min-h-screen w-full items-center justify-center overflow-x-clip bg-neutral-100"
    >
      {/* Hero title */}
      <h1 className="hero-title z-10 text-9xl font-bold tracking-tight">
        Outdoor Tones
      </h1>

      {/* Hero images */}
      <div className="hero-image-container">
        <Image
          data-hidden
          priority
          src={"/images/1.jpg"}
          alt=""
          width={384}
          height={512}
          className="hero-image absolute top-0 left-20"
        />

        <Image
          data-hidden
          priority
          src={"/images/2.jpg"}
          alt=""
          width={340}
          height={510}
          className="hero-image absolute right-30 -bottom-40"
        />

        <Image
          data-hidden
          priority
          src={"/images/3.jpg"}
          alt=""
          width={365}
          height={243}
          className="hero-image absolute top-10 right-10"
        />

        <Image
          data-hidden
          priority
          src={"/images/4.jpg"}
          alt=""
          width={225}
          height={400}
          className="hero-image absolute -top-30 right-1/2"
        />

        <Image
          data-hidden
          priority
          src={"/images/5.jpg"}
          alt=""
          width={480}
          height={320}
          className="hero-image absolute bottom-10 left-1/8"
        />

        <Image
          data-hidden
          priority
          src={"/images/6.jpg"}
          alt=""
          width={384}
          height={576}
          className="hero-image absolute top-10 right-1/4"
        />

        <Image
          data-hidden
          priority
          src={"/images/7.jpg"}
          alt=""
          width={300}
          height={200}
          className="hero-image absolute bottom-20 left-1/2"
        />
      </div>
    </section>
  );
}
