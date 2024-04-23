
"use client"
import Image from 'next/image';
import { Card, Col, Container, Row } from 'react-bootstrap'

const HowTo = () => {
  return (
    <Container fluid className='p-5' style={{ backgroundColor: '#091d3e' }}>
      <h2 className='text-center pb-5 text-white'>Como podemos cobaborar</h2>
      <Row xs={1} md={2} lg={3} className="justify-content-center g-4">
        <Col>
            <Card style={{ backgroundColor: '#102a54' }} className='text-white p-5'>
              <Image src={'/images/circle.png'} alt='' width={100} height={100} sizes='cover' className='img-fluid mx-auto d-block' />
              <Card.Body>
                <Card.Title className='text-center'>Envie-nos uma mensagem</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card&apos;s content.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        
        <Col>
            <Card style={{ backgroundColor: '#104cba' }} className='text-white p-5'>
              <Image src={'/images/circle.png'} alt='' width={100} height={100} sizes='cover' className='img-fluid mx-auto d-block' />
              <Card.Body>
                <Card.Title className='text-center'>Planeamento</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card&apos;s content.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        
        <Col>
            <Card style={{ backgroundColor: '#102a54' }} className='text-white p-5'>
            <Image src={'/images/circle.png'} alt='' width={100} height={100} sizes='cover' className='img-fluid mx-auto d-block' />
            <Card.Body>
              <Card.Title className='text-center'>Entrega do seu projeto</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card&apos;s content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  )
}

export default HowTo
