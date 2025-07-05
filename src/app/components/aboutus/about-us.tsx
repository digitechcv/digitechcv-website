'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import './about.css';

const aboutData = [
  {
    title: 'Missão',
    text: `A DigiTech, LDA proporciona soluções de TI de excelência que emocionam nossos clientes, gerando resultados com alto comprometimento e qualidade. Colocamos o cliente no centro de tudo, criando experiências positivas e memoráveis. Valorizamos as emoções e o bem-estar dos clientes, construindo parcerias sólidas e sustentáveis baseadas na confiança e satisfação mútua.`,
    image: '/images/Missao.png'
  },
  {
    title: 'Visão',
    text: `Buscamos ser referência no mercado de tecnologia da informação, que transforma sonhos digitais em experiências emocionantes e memoráveis. Queremos inspirar confiança e satisfação plena em cada interação, criando soluções inovadoras que ressoem com os sentimentos e aspirações dos nossos clientes.`,
    image: '/images/visao.png'
  },
  {
    title: 'Valores',
    text: `Inovação Constante - Estamos comprometidos em permanecer na frente da inovação.
    Comprometimento com a Qualidade - Nosso compromisso com a excelência reflete-se em todos os aspectos do nosso trabalho, desde o desenvolvimento de software até o suporte técnico.`,
    image: '/images/valores.png'
  }
];

const AboutUs = () => {
  return (
    <Container fluid className=" about-section" id="sobre">
      <Container>
        <h2 className="text-center section-title-about">Sobre Nós</h2>
        <Row xs={1} md={3} className="g-4">
          {aboutData.map((item, idx) => (
            <Col key={idx} className="d-flex justify-content-center about-card-container">
              <Card className="about-card text-center">
                <div className="about-image-wrapper">
                  <img src={item.image} alt={item.title} className="about-image" />
                </div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default AboutUs;
