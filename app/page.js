import Image from "next/image";
import LandingSection from "../components/LandingSection";
import FeatureSection from "@/components/FeatureSection";
import InfoSection from "@/components/InfoSection";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";
import SectionSix from "@/components/SectionSix";
import SectionSeven from "@/components/SectionSeven";
import SectionEight from "@/components/SectionEight";
import SectionNine from "@/components/SectionNine";
import SectionTen from "@/components/SectionTen";
import Footer from "@/components/Footer";
import SectionEleven from "@/components/SectionEleven";
import FaqSection from "@/components/FaqSection";
import Section12 from "@/components/Section12";
import Section13 from "@/components/Section13";
import Section14 from "@/components/Section14";

export default function Home() {
  return (
    <>
      <LandingSection />
      <FeatureSection />
      <InfoSection />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <Section14 />
      <Section13 />
      <Section12 />
      <FaqSection />
      <SectionEleven />
      <Footer />
    </>
  );
}
