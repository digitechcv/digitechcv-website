'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import * as Icon from 'react-bootstrap-icons';
import './footer.css';

function Footer() {
    return (
        <Container fluid className='footer'>
            <Row className='footer-content'>
                <Col className='footer-description'>
                    <img src="/images/DigiTech 1.png" alt="Digitech Logo" className='mb-3' />
                    <p>
                        A Digitech LDA, é uma empresa inovadora
                        e especializada no setor de tecnologia da informação.
                    </p>
                </Col>
                <Col className='footer-services'>
                    <h6>Serviços</h6>
                    <ul>
                        <li>Desenvolvimento de Software</li>
                        <li>Assistência Técnica</li>
                        <li>Formação em TICS</li>
                        <li>Marketing Digital</li>
                    </ul>
                </Col>
                <Col className='footer-contact'>
                    <h6>Contactos</h6>
                    <ul>
                        <a href="mailto:info@digiitechcv.com"><li><Icon.Envelope /> info@digiitechcv.com</li></a>
                        <li><Icon.Telephone /> +238985455 / +2385784512</li>
                    </ul>
                </Col>
                <Col className='footer-socialMedia'>
                    <h6>Redes Sociais</h6>
                    <ul className='FootersocialMedia'>
                        <a href="https://www.instagram.com/digitechcv?igsh=MXRpcWpvYWNpMGs2bQ==">
                            <li><Icon.Instagram /></li>
                        </a>
                        <a href="https://www.facebook.com/digitechcv?locale=fr_FR">
                            <li><Icon.Facebook /></li>
                        </a>
                        <a href="https://www.linkedin.com/company/digitech-cv/">
                            <li><Icon.Linkedin /></li>
                        </a>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
