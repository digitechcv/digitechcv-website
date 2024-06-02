import { HeroSection } from "./components/hero/hero-section";
import { NavBar } from "./components/navbar/navbar";
import HowTo from "./components/how/how-to";
import AboutUs from "./components/aboutus/about-us";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <HeroSection />
        <AboutUs />
        <HowTo />
      </main>
    </>
  );
}
