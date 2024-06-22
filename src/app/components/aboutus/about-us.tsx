"use client";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import './about.css';

const AboutUs = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid style={{ backgroundColor: '#f1f0f0' }} id='action3'>
      <Container className='text-center'>
      <h2 className='text-center section-title'>Sobre Nós</h2>
      <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-container'>
          <Carousel.Item>
            <div className="row align-items-center ">
            <div className="col-md-6">
                <Image src='/images/Missao.png' className='d-inline w-75 img-aboutUs' alt='...' style={{}} />
            </div>
            <div className="col-md-6 d-flex text-black">
              <Carousel.Caption className='text-start missao mt-5' style={{ position: 'relative' }}>
                <h3 className='text-black pb-3'>Missão</h3>
                  <p className='text-black'>A DigiTech, LDA proporciona soluções de TI de excelência que emocionam nossos clientes, gerando resultados com alto comprometimento e qualidade. Colocamos o cliente no centro de tudo, criando experiências positivas e memoráveis. Valorizamos as emoções e o bem-estar dos clientes, construindo parcerias sólidas e sustentáveis baseadas na confiança e satisfação mútua.</p>
                  <br />
                  <p className='text-black'>
                  Nosso compromisso é exceder expectativas, construir relações duradouras e ser um parceiro confiável na jornada digital de nossos clientes. Transformamos visões em realidade e experiências em momentos inesquecíveis.
                  </p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="row align-items-center">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <Image
                src='/images/visao.png'
                className='d-block w-75 img-aboutUs visao-img'
                alt='...'
                style={{  }}
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <Carousel.Caption className='text-start mt-5' style={{ position: 'relative' }}>
                <h3 className='text-black pb-3 '>Visão</h3>
                <p className='text-black'>Buscamos ser referência no mercado de tecnologia da informação, que transforma sonhos digitais em experiências emocionantes e memoráveis. Queremos inspirar confiança e satisfação plena em cada interação, criando soluções inovadoras que ressoem com os sentimentos e aspirações dos nossos clientes.</p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="row align-items-center ">
            <div className="col-md-6  d-flex align-items-center justify-content-center">
              <Image
                src='/images/valores.png'
                className='d-block w-75 img-aboutUs valores-img'
                alt='...'
                style={{ height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <Carousel.Caption className='text-start valores mt-5' style={{ position: 'relative' }}>
                <h3 className='text-black pb-3'>Valores</h3>
                  <p className='text-black'>
                    Inovação Constante - Estamos comprometidos em permanecer na frente da inovação.
                    <br />
                    Comprometimento com a Qualidade -  Nosso compromisso com a excelência reflete-se em todos os aspectos do nosso trabalho, desde o desenvolvimento de software até o suporte técnico. 
                </p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        </Carousel>
        </Container>
    </Container>
  );
}

export default AboutUs;