import Image from "next/image";
import styles from "./page.module.css";
import Button from "react-bootstrap/Button";
import Service from "./components/service/service";

export default function Home() {
  return (
    <main >
      
      <h1 className="display-2">Digitechcv</h1>
      <Service/>
    </main>
  );
}
