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
    const cardWidth = card!.offsetWidth;

    gsap.to(cards, {
      x: (i) => (i === 0 ? 0 : -i * cardWidth + i * 24),
      duration: (i) => (i === 0 ? 0 : -1 * (-i * cardWidth + i * 24)),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: true,
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
              className="w-[486px] h-[502px] rounded-[32px] bg-[#1D1A1B] flex-shrink-0 border flex flex-col justify-between py-10 px-12 font-neueHaasDisplay text-white"
            >
              <div className="flex flex-row justify-between">
                <p className="text-[20px]">mmm d, yyyy - mmm d, yyyy</p>
                <p className="italic text-[20px] text-[#05D126]">Status</p>
              </div>
              <div className="flex flex-col gap-12">
                <div>
                  <h3 className="text-[70px]">Lorem Ipsum</h3>
                  <h4 className="text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </h4>
                </div>
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="text-xl">Location</p>
                    <div className="flex flex-row">
                      {["Tag", "Tag", "Tag"].map((tag, index) => {
                        if (index === 0) {
                          return (
                            <p key={index} className="text-[#A7A7A7]">
                              {tag}
                            </p>
                          );
                        }

                        return (
                          <div key={index} className="flex flex-row">
                            <p className="mx-1 text-[#FF4D09]">•</p>
                            <p className="text-[#A7A7A7]">{tag}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="text-end">
                    <p className="text-xl">999</p>
                    <p className="text-[#FF4D09]">9 Ticket left</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
