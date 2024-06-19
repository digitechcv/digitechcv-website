'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./contactForm.css";
import { Form, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useRef, useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');

    const data = {
        name,
        email,
        phone,
        subject
    }

    useEffect(() => {
        fetch('https://formsubmit.co/digitechitcv@gmail.com', {
        method: 'POST',
            body: data,
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    },[])

    const handleSubmit = (e) => {
    e.preventDefault();

    // const data = new FormData(form.current);
    
    console.dir(data);

    
    };
    return (
        <Container fluid className='containerForm '>
            <Container className='content-container'>
                <Row className='pt-5'>
                    <Col className='left-side'>
                        <span className='mb-5'>Precisa de um projeto?</span>
                        <h3 className='mb-5 mt-5'>Para mais informações , preencha o formulário ou conctate-nos pelas nossas redes sociais</h3>
                        <p> <Icon.CheckCircleFill/> Resposta rápida</p>
                        <p> <Icon.CheckCircleFill/> Temos a reposta para si</p>
                    </Col>
                    <Col className='right-side1'>
                        <Form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Insira Nome" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Insira email" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridTel">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Insira seu numero" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridSelect">
                                <Form.Label>Assunto</Form.Label>
                                <Form.Select aria-label="Escola a sua opção" value={subject} onChange={(e) => setSubject(e.target.value)}>
                                <option>Escola a sua opção</option>
                                <option value="Desenvolvimento de Software">Desenvolvimento de Software</option>
                                <option value="Assistência Técnica">Assistência Técnica</option>
                                <option value="Formação em TICS">Formação em TICS </option>
                                <option value="Marketing Digital">Marketing Digital</option>
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