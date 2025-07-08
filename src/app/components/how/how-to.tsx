'use client';

import Image from 'next/image';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './how-to.css';
import * as Icon from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Envie-nos uma mensagem',
    text: 'Entre em contato conosco para discutir suas necessidades e receber soluções personalizadas. Estamos prontos para ajudar com dúvidas, orçamentos ou projetos específicos.',
    image: '/images/how1.png',
    bgColor: 'bg-card-1'
  },
  {
    title: 'Planejamento',
    text: 'Desenvolvemos um plano estratégico alinhado aos seus objetivos. Com uma abordagem colaborativa, identificamos oportunidades e criamos um roteiro claro para o sucesso do seu projeto.',
    image: '/images/how2.png',
    bgColor: 'bg-card-2'
  },
  {
    title: 'Entrega do seu projeto',
    text: 'Nos comprometemos com a execução eficiente e entrega pontual do seu projeto, garantindo alta qualidade em todas as fases e máxima satisfação.',
    image: '/images/how3.png',
    bgColor: 'bg-card-1'
  }
];

const HowTo = () => {
  return (
    <Container fluid className="how-to-section">
      <Container className="how-to-container">
        <h2 className="text-center pb-5 text-white">Como podemos colaborar</h2>
        <Row xs={1} md={2} lg={3} className="justify-content-center">
          {steps.map((step, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`text-white p-4 my-4 card-how-to ${step.bgColor}`}>
                  <div className="image-wrapper">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={80}
                      height={80}
                      className="img-fluid mx-auto d-block img-how-to"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-center">{step.title}</Card.Title>
                    <Card.Text className="text-center">{step.text}</Card.Text>
                  </Card.Body>
                  <div className="chevron-wrapper">
                      <div
                        className="arrow-how-to"
                        onClick={() => window.dispatchEvent(new Event('showContactForm'))}
                        role="button"
                        style={{ cursor: 'pointer' }}
                      >
                        <Icon.ChevronRight />
                      </div>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default HowTo;
