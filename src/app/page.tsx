
import { NavBar } from "./components/navbar/NavBar";
import HowTo from "./components/how/how-to";
import AboutUs from "./components/aboutus/about-us";
import Footer from "./components/footer/footer";
import Clients from "./components/clients/clients";
import Servicos from "./components/Servicos/Servicos";
import ContactFormModal from "./components/contact-form/ContactFormModal";
import { HeroSection } from "./components/hero/hero-section";
import { HeroAlternative } from "./components/hero/HeroAlternative";



export default function Home() {
  return (
    <>
      <main className='bg-light'>
        <NavBar />
        <HeroSection />
        <HeroAlternative  />
        <Servicos />
        <AboutUs />
        <HowTo />
        <Clients />
        <ContactFormModal />
        < Footer />
      </main>
    </>
  );
}
