'use client'

import { Col, Container, Row } from "react-bootstrap";
import './team.css';


function Team() {
    return (
        <Container fluid style={{ backgroundColor: '#f1f0f0' }} className="teamContainer pb-5" id="action4">
            <Container>
                <Row className="team-container pb-5">
                    <h2 className="text-center section-title">Equipa</h2>
                    <Col className="text-center team ">
                        <img src="/images/Herminio.png" alt="" className='mb-3 mt-5' />
                        <h6 className="font-weight-bold">Hermínio Moreno</h6>
                        <p>CEO/Fundador</p>
                    </Col>
                    <Col className="text-center team ">
                        <img src="/images/Dilcineia.png" alt="" className='mb-3 mt-5 img-team-2' />
                        <h6 className="font-weight-bold">Dilcineia Cruz</h6>
                        <p>Marketing / Fundadora</p>
                    </Col>
                    <Col className="text-center team">
                        <img src="/images/helder.png" alt="" className='mb-3 mt-5' />
                        <h6 className="font-weight-bold">Helder Fonseca</h6>
                        <p>Desenvolverdor Sénior</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Team;