'use client';

import { useEffect, useRef, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './hero.module.css';
import * as THREE from 'three';

export const HeroSection = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && typeof window !== 'undefined') {
      import('vanta/dist/vanta.net.min.js').then((VANTA) => {
        setVantaEffect(
          VANTA.default({
            el: vantaRef.current,
            THREE,
            color: 0x0059fc,
            backgroundColor: 0xb9c8f5,
            points: 12.0,
            maxDistance: 17.0,
            spacing: 15.0,
            showDots: true,
            mouseControls: true,
            touchControls: true,
          })
        );
      });
    }

    return () => {
      if (vantaEffect && vantaEffect.destroy) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section ref={vantaRef} className={styles.vantaHero} id="home">
      <Container className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.textBlock}
        >
          <h2 className={styles.title}>Tecnologia é apenas o começo.</h2>
          <p className={styles.paragraph}>
            Na DigiTech, somos movidos por desafios e conectados por propósito.
            Criamos soluções digitais que respeitam o tempo, a clareza e o que realmente importa: pessoas.
          </p>
          <span className={styles.quote}>
            Não vendemos apenas serviços. Criamos presença.
          </span>
          <Button
            href="https://wa.me/2385215521?text=Olá%20Digitech!%20Gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
      >
            Entrar em Contacto
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};
