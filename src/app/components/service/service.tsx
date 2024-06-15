'use client'
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./service.css";
import ServiceModal from '../service-modal/ServiceModal';



function Service() {
    const [showModal, setShowModal] = useState(false);
    const [selectedContentIndex, setSelectedContentIndex] = useState<number | null>(null);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = (index: number) => {
        setSelectedContentIndex(index);
        setShowModal(true);
    };

    return (
        <>
            <Container fluid className='service' id='action2'>
            <Container>
                <Row className=''>
                    <h2 className='text-center section-title'>Serviços</h2>
                    
                        
                    
                        <div className='col card-container'>
                            <Card style={{ width: '19rem' }} className='card1 '>
                                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/1163/1163463.png" style={{ width: '8rem' }}  />
                                
                                <Card.Body>
                                    <Card.Title id='service1'>Desenvolvimento de Software</Card.Title>
                                    <Card.Text>
                                        Transformamos suas ideias em soluções digitais personalizadas.   
                                    </Card.Text>
                                    <br />
                                    <br />
                                    <Button variant="" className='button1' onClick={() => handleShowModal(0)}>→</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col card-container'>
                            <Card style={{ width: '19rem' }} className='card2'>
                                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/7576/7576835.png" style={{ width: '8rem' }} />
                                <Card.Body>
                                    <Card.Title id='service2'>Assistência Técnica</Card.Title>
                                    <Card.Text>
                                        suporte técnico abrangente para resolver rapidamente qualquer problema que você possa enfrentar com os seus sistemas e equipamentos informáticos. 
                                    </Card.Text>
                                    <Button variant="" className='button1' onClick={() => handleShowModal(1)}>→</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col card-container'>
                            <Card style={{ width: '19rem' }} className='card3'>
                                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/10242/10242258.png" style={{ width: '8rem' }} />
                                <Card.Body>
                                    <Card.Title id='service3'>Formação em TICS</Card.Title>
                                    <Card.Text>
                                        Oferecemos cursos práticos e personalizados para capacitar sua equipa empresarial.
                                    </Card.Text>
                                    <br />
                                    <br />
                                    <Button variant="" className='button1' onClick={() => handleShowModal(2)}>→</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col card-container'>
                            <Card style={{ width: '19rem' }} className='card4'>
                                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/3141/3141181.png" style={{ width: '8rem' }} />
                                <Card.Body>
                                    <Card.Title id='service4'>Marketing Digital</Card.Title>
                                    <Card.Text>
                                        Alcance seu público-alvo de forma eficaz e impulsione seus negócios online com nossos serviços de marketing digital.
                                        
                                    </Card.Text>
                                     <br />
                                    
                                    <Button variant="" className='button1' onClick={() => handleShowModal(3)}>→</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <ServiceModal
                        showModal={showModal}
                        handleCloseModal={handleCloseModal}
                        selectedContentIndex={selectedContentIndex}
                        />
                    </Row>
                </Container>
            </Container>
        </>
    )
    
}

export default Service;