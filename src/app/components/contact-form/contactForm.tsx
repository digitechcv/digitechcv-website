'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./contactForm.css";
import { Form, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import ToastMessage from '../toast/ToastMessage';
import { useState } from 'react';
import emailjs from 'emailjs-com';


function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [toastMsg, setToastMsg] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (name === '' || email === '' || phone === '' || subject === '') return;

        const templateParams = {
            name: name,
            email: email,
            phone: phone,
            subject: subject
        };

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setToastMsg('Mensagem enviada com sucesso!');
        }).catch((err) => {
            console.log('FAILED...', err);
            setToastMsg('Erro ao enviar mensagem. Tente novamente.');
        });

        // Reset form fields
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
    };
        {/* old code for form submit
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
    
    };*/}
    return (
        <Container fluid className='containerForm bg' id='contactForm'>
  <Container className='content-container'>

    {/* Texto em cima */}
    <div className='left-side text-center mt-4'>
      {/* <span className='projectp d-block mb-3'>Precisa de um projeto?</span> */}
      <h3 className='mb-2'>Para mais informações, preencha o formulário ou contacte-nos pelas redes sociais</h3>
      {/* <p><Icon.CheckCircleFill /> Resposta rápida</p> */}
    </div>

    {/* Formulário em baixo */}
    <div className='right-side1'>
      <Form onSubmit={handleSubmit}>

        <Form.Group controlId="formGridName" className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Insira Nome"
            required
          />
        </Form.Group>

        <Form.Group controlId="formGridEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formGridTel" className="mb-3">
          <Form.Label>Número</Form.Label>
          <Form.Control
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Insira seu número"
            required
          />
        </Form.Group>

        <Form.Group controlId="formGridSelect" className="mb-3">
          <Form.Label>Assunto</Form.Label>
          <Form.Select
            aria-label="Escolha a sua opção"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <option value="">Escolha a sua opção</option>
            <option value="Desenvolvimento de Software">Desenvolvimento de Software</option>
            <option value="Assistência Técnica">Assistência Técnica</option>
            <option value="Formação em TICS">Formação em TICS</option>
            <option value="Marketing Digital">Marketing Digital</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2 mb-4 buttonSubmit">
          Submeter
        </Button>

        {toastMsg && (
          <div className="mt-3">
            <ToastMessage message={toastMsg} />
          </div>
        )}
      </Form>
    </div>

  </Container>
</Container>

    );
}

export default ContactForm;