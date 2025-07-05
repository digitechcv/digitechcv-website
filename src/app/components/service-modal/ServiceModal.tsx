'use client'

import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./serviceModal.css";

interface ServiceModalProps {
    showModal: boolean;
    handleCloseModal: () => void;
    selectedContentIndex: number | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ showModal, handleCloseModal, selectedContentIndex }) => {

    let modalContent: {
        image: string;
        title: string;
        description: string[];
    };

    switch (selectedContentIndex) {
        case 0:
            modalContent = {
                image: "https://cdn-icons-png.flaticon.com/128/1163/1163463.png",
                title: "Desenvolvimento de Software",
                description: [
                    "Landing Page - Páginas únicas e objetivas para converter visitantes em clientes.",
                    "One Page - Websites compactos, modernos e responsivos para empresas e profissionais.",
                    "Site Institucional - Apresentação profissional da sua empresa na internet.",
                    "E-Commerce - Lojas online completas, com integração de pagamentos e gestão de produtos.",
                    "Aplicações Mobile - Desenvolvimento de aplicativos Android e iOS personalizados.",
                    "Sistemas Web - Sistemas personalizados para otimização de processos empresariais."
                ]
            };
            break;
        case 1:
            modalContent = {
                image: "https://cdn-icons-png.flaticon.com/128/7576/7576835.png",
                title: "Assistência Técnica (Helpdesk)",
                description: [
                    "Suporte Técnico Remoto e Presencial - Solução rápida para problemas em TI.",
                    "Manutenção Preventiva e Corretiva - Revisão periódica e reparo de equipamentos.",
                    "Configuração e Otimização de Computadores - Melhoramos o desempenho do seu PC.",
                    "Instalação e Configuração de Softwares - Aplicativos essenciais para o seu negócio.",
                    "Backup e Recuperação de Dados-- Proteção contra perda de arquivos importantes."
                ]
            };
            break;
        case 2:
            modalContent = {
                image: "https://cdn-icons-png.flaticon.com/128/10242/10242258.png",
                title: "Formação em TICs",
                description: [
                    "Formação em Programação - Cursos de desenvolvimento web, mobile e software.",
                    "Formação em Marketing Digital – Estratégias de tráfego, redes sociais e branding.",
                    "Segurança Cibernética - Boas práticas e proteção contra ataques virtuais.",
                    "Pacote Office e Ferramentas Digitais - Domínio do Word, Excel, PowerPoint e outras ferramentas.",
                    "Automação e Inteligência Artificial - Como usar IA para otimizar processos."
                ]
            };
            break;
        case 3:
            modalContent = {
                image: "https://cdn-icons-png.flaticon.com/128/3141/3141181.png",
                title: "Marketing Digital",
                description: [
                    "Criação de Páginas nas Redes Sociais - Configuração e personalização de perfis para sua marca.",
                    "Gestão de Redes Sociais - Planejamento, monitoramento e interação com seguidores.",
                    "Criação de Conteúdo Multimídia - Desenvolvimento de posts, vídeos e artes para redes sociais.",
                    "Tráfego Pago - Campanhas de anúncios no Facebook, Instagram e Google Ads para alcançar mais clientes.",
                    "Estratégias de Marketing - Planejamento de ações digitais para potencializar sua marca.",
                    "SEO (Otimização para Motores de Busca) - Melhoramos seu site para aparecer no Google."
                ]
            };
            break;
        default:
            modalContent = {
                image: "",
                title: "",
                description: []
            };
    }

    return (
        <Modal size="lg" aria-labelledby="modal-title-vcenter" centered show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title id="modal-title-vcenter">{modalContent.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={modalContent.image} alt={modalContent.title} style={{ width: '100px' }} />
                <ul>
                    {modalContent.description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ServiceModal;
