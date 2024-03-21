import Image from "next/image";
import styles from "./page.module.css";
import Button from "react-bootstrap/Button";
import HeroSection from "./components/hero/hero-section";
import NavBar from "./components/navbar/NavBar";

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
