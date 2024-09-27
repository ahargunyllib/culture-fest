import { Fragment } from "react";
import HeroSection from "@/containers/home/HeroSection";
import EventSection from "@/containers/home/EventSection";
import TeamSection from "@/containers/home/TeamSection";
import MarqueeSection from "@/containers/home/MarqueeSection";

export default function Home() {
  return (
    <Fragment>
      {/* <Navbar/> */}
      <main>
        <HeroSection />
        <EventSection />
        <TeamSection />
        <MarqueeSection />
        {/* <PartnerSection/> */}
        {/* <FaqSection /> */}
      </main>
      {/* <Footer/> */}
    </Fragment>
  );
}
