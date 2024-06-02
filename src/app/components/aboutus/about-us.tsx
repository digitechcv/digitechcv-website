"use client"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import CarouselContent from './CarouselContent';
import { Container } from 'react-bootstrap';


const AboutUs = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <h2 className='text-center'>Sobre Nós</h2>
      <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <CarouselContent text="First slide" />
            <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-inline w-50' alt='...' />
            <Carousel.Caption className=''>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselContent text="Second slide" />
            <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselContent text="Third slide" />
            <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default AboutUs
