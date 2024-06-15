
"use client"
import Image from 'next/image';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './how-to.css';
import * as Icon from 'react-bootstrap-icons';

const HowTo = () => {
  return (
    <Container fluid className='p-5 g-4 ' style={{ backgroundColor: '#091d3e' }}>
      <Container>
      <h2 className='text-center pb-5 text-white'>Como podemos cobaborar</h2>
      <Row xs={1} md={2} lg={3} className="justify-content-center container-how-to">
        <Col>
            <Card style={{ backgroundColor: '#102a54' }} className='text-white p-5 card-how-to'>
              <Image src={'/images/how1.png'} alt='' width={100} height={100}  className='img-fluid mx-auto d-block img-how-to1' />
              <Card.Body>
                <Card.Title className='text-center'>Envie-nos uma mensagem</Card.Title>
                <Card.Text>
                Entre em contato conosco para discutir suas necessidades e receber soluções personalizadas. Estamos prontos para ajudar com dúvidas, orçamentos ou projetos específicos.
                </Card.Text>
              </Card.Body>
              <a href="" className='text-center mb-2 arrow-how-to'><Icon.ChevronRight/></a>
            </Card>
        </Col>
        
        <Col>
            <Card style={{ backgroundColor: '#104cba' }} className='text-white p-5 card-how-to'>
              <Image src={'/images/how2.png'} alt='' width={100} height={100} className='img-fluid mx-auto d-block img-how-to' />
              <Card.Body>
                <Card.Title className='text-center'>Planeamento</Card.Title>
                <Card.Text>
                Desenvolvemos um plano estratégico alinhado aos seus objetivos. Com uma abordagem colaborativa, identificamos oportunidades e criamos um roteiro claro para o sucesso do seu projeto.
                </Card.Text>
              </Card.Body>
              <a href="" className='text-center mb-2 arrow-how-to'><Icon.ChevronRight/></a>
            </Card>
        </Col>
        
        <Col>
            <Card style={{ backgroundColor: '#102a54' }} className='text-white p-5 card-how-to'>
            <Image src={'/images/how3.png'} alt='' width={100} height={100} className='img-fluid mx-auto d-block' />
            <Card.Body>
              <Card.Title className='text-center'>Entrega do seu projeto</Card.Title>
              <Card.Text>
              Nos comprometemos com a execução eficiente e entrega pontual do seu projeto, garantindo alta qualidade em todas as fases e máxima satisfação.
              </Card.Text>
              </Card.Body>
              <a href="" className='text-center mb-2 arrow-how-to'><Icon.ChevronRight/></a>
          </Card>
        </Col>
        
        </Row>
        </Container>
    </Container>
  )
}

export default HowTo
