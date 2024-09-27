"use client";

import SparkEvent from "@/assets/svgs/home/spark-event.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function MarqueeSection() {
  useGSAP(() => {
    const marqueeSection = document.getElementById("marquee-section");
    const marquee = document.getElementById("marquee");
    const marqueeWidth = marquee!.scrollWidth;

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { duration: 15, ease: "none" },
    });

    tl.to(marqueeSection, {
      x: -(marqueeWidth + 56) // 56px is the gap between the two marquees
    });

  }, []);

  return (
    <main className="w-screen overflow-hidden">
      <section
        id="marquee-section"
        className="flex flex-row w-max gap-[56px]"
      >
        <div
          id="marquee"
          className="flex flex-row gap-[56px] w-max items-center"
        >
          <h1 className="font-instrumentSans font-bold text-[104px]">
            Experience
          </h1>
          <Image src={SparkEvent} alt="Spark Event" className="size-[99px]" />
          <h1 className="font-instrumentSans font-bold text-[104px]">
            Immersive
          </h1>
          <Image src={SparkEvent} alt="Spark Event" className="size-[99px]" />
          <h1 className="font-instrumentSans font-bold text-[104px]">
            Unforgettable
          </h1>
          <Image src={SparkEvent} alt="Spark Event" className="size-[99px]" />
        </div>
        <div
          className="flex flex-row gap-[56px] items-center"
        >
          <h1 className="font-instrumentSans font-bold text-[104px]">
            Experience
          </h1>
          <Image src={SparkEvent} alt="Spark Event" className="size-[99px]" />
          <h1 className="font-instrumentSans font-bold text-[104px]">
            Immersive
          </h1>
          <Image src={SparkEvent} alt="Spark Event" className="size-[99px]" />
          <h1 className="font-instrumentSans font-bold text-[104px]">
            Unforgettable
          </h1>
          <Image src={SparkEvent} alt="Spark Event" className="size-[99px]" />
        </div>
      </section>
    </main>
  );
}
