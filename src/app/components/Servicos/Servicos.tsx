'use client';

import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import StyledServiceModal from "../StyledServiceModal/StyledServiceMOdal";
import "./Servicos.css";

const servicos = [
  {
    title: "Desenv. Software",
    image:
      "https://validthemes.net/themeforest/wp/crysa/wp-content/uploads/2022/07/4.jpg",
  },
  {
    title: "Consultoria Tecnológica",
    image:
      "https://validthemes.net/themeforest/wp/crysa/wp-content/uploads/2022/07/9-1.jpg",
  },
  {
    title: "Formação em TICS",
    image:
      "https://validthemes.net/themeforest/wp/crysa/wp-content/uploads/2022/07/3.jpg",
  },
  {
    title: "Marketing Digital",
    image:
      "https://validthemes.net/themeforest/wp/crysa/wp-content/uploads/2022/07/4-1.jpg",
  },
];

const Servicos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedIndex(null);
  };

  return (
    <section className="mb-5 px-3 " id="servicos">
      <Container className="text-center">
        <h2 className='text-center section-title-service mt-5'>Serviços</h2>
        <Row className="justify-content-center g-5">
          {servicos.map((servico, idx) => (
            <Col key={idx} xs={12} sm={6} md={3}>
              <div
                className="servico-card"
                style={{ cursor: "pointer" }}
                onClick={() => handleCardClick(idx)}
              >
                <Card className="shadow-lg text-white border-0 rounded-4 overflow-hidden h-100">
                  <div
                    className="bg-image-servico"
                    style={{
                      backgroundImage: `url(${servico.image})`,
                    }}
                  >
                    <Card.Body className="d-flex flex-column justify-content-end p-4 bg-gradient-overlay">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 fs-6 fs-md-5 text-white">{servico.title}</h5>
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="1.2em"
                          width="1.2em"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Novo Modal Estilizado */}
      <StyledServiceModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        selectedContentIndex={selectedIndex}
      />
    </section>
  );
};

export default Servicos;
