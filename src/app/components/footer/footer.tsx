'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Icon from 'react-bootstrap-icons';
import './footer.css';3

function Footer() {
    return (
        <Container fluid className='footer'>
            <Row className='footer-content' p-5 m-5>
                <Col className='footer-description text-white mx-5 pt-5'>
                    <img src="/images/DigiTech 1.png" alt="" className='mb-3' />
                    <p>
                    A Digitech LDA, 
                    é uma empresa inovadora
                    e especializada no setor de 
                    tecnologia da informaçã
                    </p>
                </Col>
                <Col className='footer-services pt-5'>
                    <h6>Serviços</h6>
                    <ul>
                       <a href='service1'><li>Desenvolvimento de Software </li></a> 
                        <a href='service2'><li>Assistência Técnica </li></a>
                        <a href="service3"><li>Formação em TICS </li></a>
                        <a href="service4"><li>Marketing Digital </li></a>
                    </ul>
                </Col>
                <Col className='footer-contact '>
                    <h6>Contactos</h6>
                    <ul>
                        <a href="mailto:info@digiitechcv.com"><li> <Icon.Envelope/>  info@digiitechcv.com</li></a>
                        <a href="tel:+238985455 / +2385784512"><li><Icon.Telephone/> +238985455 / +2385784512</li></a>
                    </ul>
                </Col>
                <Col className='footer-socialMedia '>
                    <h6>Redes sociais</h6>
                    <ul className='FootersocialMedia'>
                        <li className='mx-2'><Icon.Facebook/></li>
                        <li className='mx-2'><Icon.Instagram/></li>
                        <li className='mx-2'><Icon.Linkedin/></li>
                    </ul>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Footer;