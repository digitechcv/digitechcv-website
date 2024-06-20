import HowTo from "./components/how/how-to";
import AboutUs from "./components/aboutus/about-us";
import Service from "./components/service/service";
import Team from "./components/team/Team";
import ContactForm from "./components/contact-form/contactForm";
import Footer from "./components/footer/footer";
import Clients from "./components/clients/clients";
import NavBar from "./components/navbar/NavBar";
import HeroSection from "./components/hero/hero-section";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <HeroSection />
        <Service />
        <AboutUs />
        <HowTo />
        <Team />
        < ContactForm />
        <Clients />
        < Footer />
      </main>
    </>
  );
}
