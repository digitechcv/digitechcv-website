'use client'
import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap';
import Image from 'react-bootstrap';
import "./service.css";



function Service() {
    return (
        <>
            <Container fluid>
                <Container>
                    <div className='row g-4'>
                        <div className='col'>
                            <Card style={{ width: '' }} className='card1 '>
                                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/1163/1163463.png" style={{ width: '8rem' }}  />
                                
                                <Card.Body>
                                    <Card.Title>Desenvolvimento de Software</Card.Title>
                                    <Card.Text>
                                        Transformamos suas ideias em soluções digitais personalizadas.   
                                    </Card.Text>
                                    <br />
                                    <br />
                                    <Button variant="" className=''>→</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col'>
                            <Card style={{ width: '' }} className='card2'>
                                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/7576/7576835.png" style={{ width: '8rem' }} />
                                <Card.Body>
                                    <Card.Title>Assistência Técnica</Card.Title>
                                    <Card.Text>
                                        suporte técnico abrangente para resolver rapidamente qualquer problema que você possa enfrentar com os seus sistemas e equipamentos informáticos. 
                                    </Card.Text>
                                    <Button variant="" className=''>→</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col'>
                            <Card style={{ width: '' }} className='card3'>
                                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/10242/10242258.png" style={{ width: '8rem' }} />
                                <Card.Body>
                                    <Card.Title>Formação em TICS</Card.Title>
                                    <Card.Text>
                                        Oferecemos cursos práticos e personalizados para capacitar sua equipa empresarial.
                                    </Card.Text>
                                    <br />
                                    <br />
                                    <Button variant="" className=''>→</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col'>
                            <Card style={{ width: '' }} className='card4'>
                                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/3141/3141181.png" style={{ width: '8rem' }} />
                                <Card.Body>
                                    <Card.Title>Marketing Digital</Card.Title>
                                    <Card.Text>
                                        Alcance seu público-alvo de forma eficaz e impulsione seus negócios online com nossos serviços de marketing digital.
                                        
                                    </Card.Text>
                                     <br />
                                    
                                    <Button variant="" className=''>→</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Container>
        </>
    )
    
}

export default Service;