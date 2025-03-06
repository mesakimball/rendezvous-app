import Footer from "../components/Footer.tsx";
import Hero from "../components/Hero.tsx";
import UpcomingDates from "../components/UpcomingDates.tsx";
import CountDown from "../islands/CountDown.tsx";

export default function Home() {
  const countDownDate =
    "Wed Mar 19 2025 19:00:00 GMT-0700 (Mountain Standard Time";
  return (
    <main>
      <Hero />
      <CountDown endLabel="Registration Start" endDate={countDownDate} />
      <UpcomingDates />
      <Footer />
    </main>
  );
}
