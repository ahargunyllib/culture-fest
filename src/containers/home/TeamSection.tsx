import ArrowRightBottom from "@/assets/svgs/home/arrow-right-bottom.svg";
import ImageTeam from "@/assets/svgs/home/image-team.svg";
import Image from "next/image";

export default function TeamSection() {
  return (
    <main className="min-h-dvh relative">
      <section className="absolute right-[95px] bottom-0 w-[1663px] h-[942px]">
        <div className="absolute top-0 right-0">
          <p className="text-end font-neueHaasDisplay text-[64px] leading-none">
            We create <i>unforgettable</i> memories <br /> through{" "}
            <i>experiences</i>, crafted from art and <br /> technology pushed
            beyond every limit, <br /> from resident shows and one-night <br />{" "}
            sensations to dynamic ceremonies
          </p>
        </div>
        <div className="absolute top-[210px] left-0 z-10">
          <h2 className="font-neueHaasDisplay text-[56px] italic font-thin leading-none">
            Meet our
          </h2>
          <h1 className="font-neueHaasDisplay text-[104px] leading-none">Team</h1>
        </div>
        <div className="absolute bottom-0 left-[129px]">
          <Image src={ImageTeam} alt="Team" />
        </div>
        <div className="absolute right-0 bottom-[223px] size-[140px] rounded-full border border-black flex justify-center items-center">
          <Image src={ArrowRightBottom} alt="Arrow Right Bottom" className="rotate-90"/>
        </div>
      </section>
    </main>
  );
}
