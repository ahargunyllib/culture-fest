import { Fragment } from "react";
import HeroSection from "@/containers/home/HeroSection";
import EventSection from "@/containers/home/EventSection";

export default function Home() {
  return (
    <Fragment>
      {/* <Navbar/> */}
      <main>
        <HeroSection />
        <EventSection />
        {/* <TeamSection/> */}
        {/* <PartnerSection/> */}
        {/* <FaqSection /> */}
      </main>
      {/* <Footer/> */}
    </Fragment>
  );
}
