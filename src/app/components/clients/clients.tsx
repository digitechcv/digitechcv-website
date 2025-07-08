'use client'

import { Container, Row, Col } from 'react-bootstrap';
import './clients.css';

const clientsLogos = [
  "/images/clients/ujamaa.png",
  "/images/clients/Cam.png",
  "/images/clients/imontrond.png",
  "/images/clients/topoecas.png",
  "/images/clients/incubator.png"
];

const ClientsSection = () => {
  return (
    <Container fluid className="clients-section" id="clientes">
      <Container className="text-center">
        <h2 className="text-center section-title-clients">Os nossos clientes</h2>
        <div className="scroll-container">
          <div className="scroll-content">
            {clientsLogos.concat(clientsLogos).map((logo, idx) => (
              <div className="clients" key={idx}>
                <img src={logo} alt={`Client ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ClientsSection;
