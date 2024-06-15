"use client";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselContent from './CarouselContent';
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
                <img src='/images/Missao.png' className='d-inline w-75 img-aboutUs' alt='...' style={{}} />
            </div>
            <div className="col-md-6 d-flex align-items-center text-black">
              <Carousel.Caption className='text-start' style={{ position: 'relative' }}>
                <h3 className='text-black'>Missão</h3>
                <p className='text-black'>A DigiTech tem como missão proporcionar soluções de TI de excelência e gerar resultados com elevado nível de comprometimento e qualidade. Nossa dedicação visa estabelecer confiança na continuidade dos negócios de nossos clientes, superando expectativas por meio de serviços personalizados, inovação constante e parcerias sólidas</p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src='/images/visao.jpg'
                className='d-block w-75 img-aboutUs visao-img'
                alt='...'
                style={{  }}
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <Carousel.Caption className='text-start' style={{ position: 'relative' }}>
                <h3 className='text-black'>Visão</h3>
                <p className='text-black'>Buscamos ser referência no mercado de tecnologia da informação, reconhecidos pela inovação constante, excelência em serviços personalizados e impacto positivo nas operações e estratégias digitais de nossos clientes.</p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src='/images/valores.jpg'
                className='d-block w-75 img-aboutUs valores-img'
                alt='...'
                style={{ height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <Carousel.Caption className='text-start' style={{ position: 'relative' }}>
                <h3 className='text-black'>Valores</h3>
                <p className='text-black'>
                  Inovação Constante<br />
                  Parceria e Confiança
                  <br />
                  Foco em Resultados
                  <br />
                  Capacitação Profissional
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