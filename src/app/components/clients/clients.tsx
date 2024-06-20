'use client'

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './clients.css'; 

const ClientsSection = () => {
    return (
        <Container fluid style={{ backgroundColor: '#f1f0f0' }} className="pb-5" id="action5">
        <Container className="text-center">
            <h2 className="text-center pb-5 section-title">Os nossos clientes</h2>
            <div className="scroll-container">
                <div className="scroll-content">
                    <div className="clients">
                        <Image src="/images/clients/ujamaa.png" alt="Client 1" className="mb-3" />
                    </div>
                    <div className="clients">
                        <Image src="/images/clients/Cam.png" alt="Client 2" className="mb-3 img-team-2" />
                    </div>
                    <div className="clients">
                        <Image src="/images/clients/imontrond.png" alt="Client 3" className="mb-3" />
                    </div>
                    <div className="clients">
                        <Image src="/images/clients/topoecas.png" alt="Client 4" className="mb-3" />
                        </div>
                        <div className="clients">
                        <Image src="/images/clients/ujamaa.png" alt="Client 1" className="mb-3" />
                    </div>
                    <div className="clients">
                        <Image src="/images/clients/Cam.png" alt="Client 2" className="mb-3 img-team-2" />
                    </div>
                    <div className="clients">
                        <Image src="/images/clients/imontrond.png" alt="Client 3" className="mb-3" />
                    </div>
                    <div className="clients">
                        <Image src="/images/clients/topoecas.png" alt="Client 4" className="mb-3" />
                    </div>
                </div>
            </div>
        </Container>
    </Container>
    );
};

export default ClientsSection;

