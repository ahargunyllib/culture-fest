import ArrowRightBottom from "@/assets/svgs/home/arrow-right-bottom.svg";
import HeroSectionBg from "@/assets/svgs/home/hero-section-bg.svg";
import ImgScroll1 from "@/assets/svgs/home/img-scroll-1.svg";
import ImgScroll2 from "@/assets/svgs/home/img-scroll-2.svg";
import ImgScroll3 from "@/assets/svgs/home/img-scroll-3.svg";
import ImgScroll4 from "@/assets/svgs/home/img-scroll-4.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className={cn("bg-[#17181A]", "min-h-dvh")}>
      <section className="relative w-full">
        <div className="absolute top-80 left-24 w-[1000px] text-white z-20">
          <div className="space-y-[100px]">
            <div className="">
              <h1 className={cn("font-instrumentSans font-[700] text-8xl")}>
                Get Ready For
              </h1>
              <h3
                className={cn(
                  "font-neueHaasDisplay font-[300] italic text-7xl"
                )}
              >
                Unforgettable
              </h3>
              <div className="h-5" />
              <h2 className={cn("font-neueHaasDisplay text-9xl text-end")}>
                Event Experience
              </h2>
            </div>
            <div className="gap-[370px] flex flex-row">
              <div className="size-[140px] rounded-full bg-[#FF4D09] flex justify-center items-center">
                <Image src={ArrowRightBottom} alt="Arrow Right Bottom" />
              </div>
              <div className="mt-auto">
                <p className="font-neueHaasDisplay text-end w-max text-[32px] opacity-70">
                  Buying tickets through our <br /> platform is easy
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-[38px] overflow-y-auto h-dvh">
          <div
            id="image-scroll"
            className="w-[841px] h-[2177px] relative z-10"
          >
            <Image
              src={ImgScroll1}
              alt="Image Scroll 1"
              className="absolute top-[165px] left-0"
            />
            <Image
              src={ImgScroll2}
              alt="Image Scroll 2"
              className="absolute top-[769px] right-0"
            />
            <Image
              src={ImgScroll3}
              alt="Image Scroll 3"
              className="absolute top-[1223px] left-[59px]"
            />
            <Image
              src={ImgScroll4}
              alt="Image Scroll 4"
              className="absolute bottom-0 left-[361px]"
            />
          </div>
        </div>
      </section>

      <Image
        src={HeroSectionBg}
        alt="Hero Section Background"
        className="absolute top-0 left-0 z-0 "
      />
    </main>
  );
}
