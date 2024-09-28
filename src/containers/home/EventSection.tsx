"use client";

import SparkEvent from "@/assets/svgs/home/spark-event.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EventSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !cardsContainerRef.current) return;

    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cards = gsap.utils.toArray(cardsContainer.children);

    const card = document.getElementById("card");
    const cardWidth = card!.offsetWidth

    gsap.to(cards, {
      x: (i) => (i === 0 ? 0 : -i * cardWidth + i * 24),
      duration: (i) =>
        i === 0 ? 0 : -1 * (-i * cardWidth + i * 24),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <main ref={sectionRef} className="min-h-dvh w-full">
      <section className="relative w-min top-[31px] left-[235px]">
        <div className="w-[607px] h-[336px] absolute">
          <div className="space-y-4 absolute bottom-0 z-20 w-full">
            <p className="font-neueHaasDisplay font-[300] italic text-[56px] ">
              Choose your
            </p>
            <h4 className="font-neueHaasDisplay text-8xl text-end">
              Experience
            </h4>
          </div>
          <div className="w-full">
            <Image
              src={SparkEvent}
              alt="Spark Event"
              className="absolute top-0 right-[78px] z-10"
            />
          </div>
        </div>
      </section>
      <section className="relative top-[460px] w-dvh overflow-hidden">
        <div
          ref={cardsContainerRef}
          className="flex flex-row gap-6 max-w-min ml-24"
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              id="card"
              key={index}
              className="w-[486px] h-[502px] rounded-[32px] bg-[#1D1A1B] flex-shrink-0 border"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
