'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./contactForm.css";
import { Form, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import ToastMessage from '../toast/ToastMessage';
import { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (name === '' || email === '' || phone === '' || subject === '')
            return 

        
        fetch('https://formsubmit.co/ajax/digitechitcv@gmail.com', {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                subject
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    
        //console.dir(data);

        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
    
    };
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
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Insira Nome" required/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Insira email" required/>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridTel">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Insira seu numero" required/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridSelect">
                                <Form.Label>Assunto</Form.Label>
                                <Form.Select aria-label="Escola a sua opção" value={subject} onChange={(e) => setSubject(e.target.value)} required>
                                <option>Escola a sua opção</option>
                                <option value="Desenvolvimento de Software">Desenvolvimento de Software</option>
                                <option value="Assistência Técnica">Assistência Técnica</option>
                                <option value="Formação em TICS">Formação em TICS </option>
                                <option value="Marketing Digital">Marketing Digital</option>
                                </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row className='mb-3'>
                                <input type="hidden" name="_template" value="table"></input>
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