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
      title: 'Desenvolvimento de Software',
      image: 'https://cdn-icons-png.flaticon.com/128/1163/1163463.png',
      description: [
        'Landing Page - Páginas únicas e objetivas para converter visitantes em clientes.',
        'One Page - Websites compactos, modernos e responsivos para empresas e profissionais.',
        'Site Institucional - Apresentação profissional da sua empresa na internet.',
        'E-Commerce - Lojas online completas, com integração de pagamentos e gestão de produtos.',
        'Aplicações Mobile - Desenvolvimento de aplicativos Android e iOS personalizados.',
        'Sistemas Web - Sistemas personalizados para otimização de processos empresariais.'
      ]
    },
    {
      title: 'Assistência Técnica (Helpdesk)',
      image: 'https://cdn-icons-png.flaticon.com/128/7576/7576835.png',
      description: [
        'Suporte Técnico Remoto e Presencial - Solução rápida para problemas em TI.',
        'Manutenção Preventiva e Corretiva - Revisão periódica e reparo de equipamentos.',
        'Configuração e Otimização de Computadores - Melhoramos o desempenho do seu PC.',
        'Instalação e Configuração de Softwares - Aplicativos essenciais para o seu negócio.',
        'Backup e Recuperação de Dados - Proteção contra perda de arquivos importantes.'
      ]
    },
    {
      title: 'Formação em TICs',
      image: 'https://cdn-icons-png.flaticon.com/128/10242/10242258.png',
      description: [
        'Formação em Programação - Cursos de desenvolvimento web, mobile e software.',
        'Formação em Marketing Digital – Estratégias de tráfego, redes sociais e branding.',
        'Segurança Cibernética - Boas práticas e proteção contra ataques virtuais.',
        'Pacote Office e Ferramentas Digitais - Word, Excel, PowerPoint e ferramentas de produtividade.',
        'Automação e Inteligência Artificial - Como usar IA para otimizar processos.'
      ]
    },
    {
      title: 'Marketing Digital',
      image: 'https://cdn-icons-png.flaticon.com/128/3141/3141181.png',
      description: [
        'Criação de Páginas nas Redes Sociais - Personalização de perfis para sua marca.',
        'Gestão de Redes Sociais - Monitoramento e interação com seguidores.',
        'Criação de Conteúdo Multimídia - Posts, vídeos e artes para redes sociais.',
        'Tráfego Pago - Anúncios no Facebook, Instagram e Google Ads.',
        'SEO - Melhoramos seu site para aparecer no Google.'
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
            <div className="modal-image-wrapper">
              <img
                src={modalContent.image}
                alt={modalContent.title}
                className="modal-service-image"
              />
            </div>
            <ul className="modal-service-list">
              {modalContent.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
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
