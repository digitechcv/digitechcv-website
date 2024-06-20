'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./contactForm.css";
import { Form, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

function ContactForm() {
    return (
        <Container fluid className='containerForm bg' id='contactForm'>
            <Container className='content-container'>
                <Row className=' bothside'>
                    <Col className='left-side'>
                        <span className='mb-5 projectp'>Precisa de um projeto?</span>
                        <h3 className='mb-5 mt-5'>Para mais informações , preencha o formulário ou conctate-nos pelas nossas redes sociais</h3>
                        <p> <Icon.CheckCircleFill/> Resposta rápida</p>
                        <p> <Icon.CheckCircleFill/> Temos a reposta para si</p>
                    </Col>
                    <Col className='right-side1'>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Insira Nome" />
                                </Form.Group>

                                 <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Insira email" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridTel">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control type="tel" placeholder="Insira seu numero" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridSelect">
                                <Form.Label>Assunto</Form.Label>
                                <Form.Select aria-label="Escola a sua opção">
                                <option>A sua opção</option>
                                <option value="1">Desenvolvimento de Software</option>
                                <option value="2">Assistência Técnica</option>
                                <option value="3">Formação em TICS </option>
                                <option value="4">Marketing Digital</option>
                                </Form.Select>
                                </Form.Group>
                                
                            </Row>
                            <Button variant="primary" type="submit" className="mt-3 buttonSubmit">
                                Submeter
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>             
      </Container>
    );
  }
  
  export default ContactForm;