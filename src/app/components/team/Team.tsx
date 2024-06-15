'use client'

import { Col, Container, Row } from "react-bootstrap";

function Team() {
    return (
        <Container fluid style={{ backgroundColor: '#f1f0f0' }} className="teamContainer pb-5" id="action4">
            <Container>
                <Row>
                    <h2 className="text-center pb-5 section-title">Equipa</h2>
                    <Col className="text-center">
                        <img src="/images/Herminio.png" alt="" className='mb-3' />
                        <h6 className="font-weight-bold">Hermínio Moreno</h6>
                        <p>CEO/Fundador</p>
                    </Col>
                    <Col className="text-center">
                        <img src="/images/Dilcineia.png" alt="" className='mb-3 img-team-2' />
                        <h6 className="font-weight-bold">Dilcineia Cruz</h6>
                        <p>Marketing /Fundadora</p>
                    </Col>
                    <Col className="text-center">
                        <img src="/images/helder.png" alt="" className='mb-3' />
                        <h6 className="font-weight-bold">Helder Cardoso</h6>
                        <p>Desenvolverdor Sénior</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Team;