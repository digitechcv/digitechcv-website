'use client';

import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './StyledServiceModal.css';

interface ServiceModalProps {
  showModal: boolean;
  handleCloseModal: () => void;
  selectedContentIndex: number | null;
}

const StyledServiceModal: React.FC<ServiceModalProps> = ({
  showModal,
  handleCloseModal,
  selectedContentIndex
}) => {
  const content = [
    {
      title: 'Desenvolvimento Web & Mobile',
      image: 'https://cdn-icons-png.flaticon.com/128/1163/1163463.png',
      shortDescription: `Oferecemos soluções digitais completas, desde websites institucionais, e-commerces e blogs até aplicações mobile Android e iOS. Desenvolvemos também plataformas SaaS e lojas online com foco em performance, SEO e excelente experiência do utilizador.`,
      description: [
        'Criação de websites institucionais, e-commerces e blogs.',
        'Aplicações mobile Android e iOS.',
        'Otimização para SEO e experiência do utilizador (UX/UI).',
        'Criação e gestão de lojas online.',
        'Criação de plataformas SaaS (ex: plataformas de ensino, marketplaces, sistemas de reservas).'
      ]
    },
    {
      title: 'Consultoria Tecnológica e Transformação Digital',
      image: 'https://cdn-icons-png.flaticon.com/128/7576/7576835.png',
      shortDescription: `Apoiamos empresas na sua jornada digital com diagnóstico personalizado, planeamento estratégico e formação de equipas. Facilitamos a transição digital de negócios, promovendo inovação, eficiência e crescimento sustentável.`,
      description: [
        'Diagnóstico digital para empresas.',
        'Planeamento estratégico de presença online.',
        'Formação de equipas em ferramentas digitais.',
        'Apoio à transição digital de negócios tradicionais.',
        'Suporte personalizado.'
      ]
    },
    {
      title: 'Formação em TICs',
      image: 'https://cdn-icons-png.flaticon.com/128/10242/10242258.png',
      shortDescription: `Capacitamos profissionais e empreendedores com formações práticas e atualizadas. Oferecemos mentorias, workshops e programas de formação em marketing digital, tecnologia, IA generativa e muito mais – adaptados a escolas, universidades e empresas.`,
      description: [
        'Mentoria para startups e empreendedores digitais.',
        'Formação em áreas como: marketing digital, programação, ferramentas de produtividade, IA generativa entre outros.',
        'Workshops para escolas, universidades e empresas.'
      ]
    },
    {
      title: 'Marketing Digital',
      image: 'https://cdn-icons-png.flaticon.com/128/3141/3141181.png',
      shortDescription: `Impulsionamos marcas através de estratégias eficazes de marketing digital. Cuidamos da gestão de redes sociais, campanhas de anúncios pagos, branding, automação de e-mails e funis de vendas, sempre com foco em resultados reais.`,
      description: [
        'Gestão de redes sociais (criação de conteúdo, agendamento e anúncios).',
        'Campanhas de tráfego pago (Google Ads, Meta Ads).',
        'Automação de e-mail marketing e funis de vendas.',
        'Branding e identidade visual.'
      ]
    }
  ];

  const modalContent =
    selectedContentIndex !== null ? content[selectedContentIndex] : null;

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      centered
      size="lg"
      contentClassName="custom-service-modal"
    >
      {modalContent && (
        <>
          <Modal.Header closeButton>
            <Modal.Title>{modalContent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-content-wrapper">
              <div className="modal-image-text">
                <img
                  src={modalContent.image}
                  alt={modalContent.title}
                  className="modal-service-image"
                />
                <p className="modal-short-description">
                  {modalContent.shortDescription}
                </p>
              </div>
              <ul className="modal-service-list">
                {modalContent.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleCloseModal}>
              Fechar
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent('fillSubjectFromService', {
                    detail: modalContent.title,
                  })
                );
                window.dispatchEvent(new CustomEvent('showContactForm'));
                handleCloseModal();
              }}
            >
              Contactar
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default StyledServiceModal;
