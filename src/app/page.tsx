import { HeroSection } from "./components/hero/hero-section";
import { NavBar } from "./components/navbar/navbar";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <HeroSection />
      </main>
    </>
  );
}
