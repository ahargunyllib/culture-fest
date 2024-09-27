import Image from "next/image";
import SparkEvent from '@/assets/svgs/home/spark-event.svg';

export default function MarqueeSection() {
  return (
    <main>
      <section className="flex flex-row gap-[56px] overflow-y-auto items-center">
        <h1 className="font-instrumentSans font-bold text-[104px]">Experience</h1>
        <Image src={SparkEvent} alt="Spark Event" className="size-[99px]" />
        <h1 className="font-instrumentSans font-bold text-[104px]">Immersive</h1>
        <Image src={SparkEvent} alt="Spark Event" className="size-[99px]" />
        <h1 className="font-instrumentSans font-bold text-[104px]">Unforgettable</h1>
        <Image src={SparkEvent} alt="Spark Event" className="size-[99px]" />
      </section>
    </main>
  );
}
