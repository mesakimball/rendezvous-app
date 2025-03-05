import Hero from "../components/Hero.tsx";
import CountDown from "../islands/CountDown.tsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <CountDown endDate="10/06/2025" />
    </main>
  );
}
