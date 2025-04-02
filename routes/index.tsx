import BlurbSection from "../components/BlurbSection.tsx";
import CampRaymondSection from "../components/CampRaymondSection.tsx";
import EventsSection from "../components/EventsSection.tsx";
import FAQSection from "../components/FAQSection.tsx";
import FooterSection from "../components/FooterSection.tsx";
import HeroSection from "../components/HeroSection.tsx";
import RegisterSection from "../components/RegisterSection.tsx";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BlurbSection />
      <RegisterSection />
      <CampRaymondSection />
      <EventsSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
