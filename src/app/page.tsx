import { HeroSection } from "./components/hero/hero-section";
import { NavBar } from "./components/navbar/navbar";
import HowTo from "./components/how/how-to";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <HeroSection />
        <HowTo />
      </main>
    </>
  );
}
