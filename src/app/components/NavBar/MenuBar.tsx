"use client"
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./navBar.css";


export default function MenuBar() {
  return (
    <>
        <Navbar className="" expand="md">
          <Container fluid>
            <Navbar.Brand href="/">
              <Image
                  src={"/images/digitech.png"}
                  width={80}
                  height={80}
                  className="d-inline-block align-top logo-navBar"
                  alt="Digitechcv Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="/" className='active'>home</Nav.Link>
                  <Nav.Link href="#action3">sobre nós</Nav.Link>
                  <Nav.Link href="#action2">serviço</Nav.Link>
                  <Nav.Link href="#action5">Clientes</Nav.Link>
                  <Nav.Link href="#action4">equipa</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  )
}

