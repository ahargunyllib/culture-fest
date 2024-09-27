import SparkEvent from "@/assets/svgs/home/spark-event.svg";
import Image from "next/image";

export default function EventSection() {
  return (
    <main className="min-h-dvh w-full">
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
      <section className="relative top-[460px]">
        <div className="flex flex-row gap-6 overflow-x-auto max-w-min ml-24">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="w-[486px] h-[502px] rounded-[32px] bg-[#1D1A1B] flex-shrink-0"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
