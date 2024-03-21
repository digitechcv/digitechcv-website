"use client"
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const NavBar = () => {
  return (
    <>
        <Navbar className="bg-body-ternary" expand="md">
          <Container>
            <Navbar.Brand href="#">
              <Image
                  src={"/images/digitech.png"}
                  width={50}
                  height={50}
                  className="d-inline-block align-top"
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
                  <Nav.Link href="#action1" className='active'>home</Nav.Link>
                  <Nav.Link href="#action2">sobre nós</Nav.Link>
                  <Nav.Link href="#action2">serviço</Nav.Link>
                  <Nav.Link href="#action2">projetos</Nav.Link>
                  <Nav.Link href="#action2">equipa</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  )
}
