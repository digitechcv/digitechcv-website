'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './heroAlternative.module.css';

export const HeroAlternative = () => {
  return (
    <section className={styles.altHero}>
      <Container>
        <Row className="align-items-center">
          {/* Texto */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={styles.textBlock}
            >
              <h2 className={styles.title}>Inovação com Propósito</h2>
              <p className={styles.paragraph}>
                Combinamos tecnologia avançada e design inteligente para transformar ideias em soluções digitais impactantes.
                Nosso foco é criar experiências que unem eficiência e emoção.
              </p>
              <span className={styles.quote}>
                Soluções digitais com alma e tecnologia de ponta.
              </span>
            </motion.div>
          </Col>

          {/* Imagem real com blob animado atrás */}
          <Col md={6}>
            <div className={styles.imageWrapper}>
              <motion.div
                className={styles.blobContainer}
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                <img
                  src="/images/blob.svg" // Certifica-te que o blob.svg está em public/images
                  alt="Figura Abstrata Animada"
                  className={styles.blob}
                />
              </motion.div>
              <Image
                src="https://c0.wallpaperflare.com/preview/472/730/407/accounting-alone-analysis-analytics.jpg"
                alt="Equipa DigiTech"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
