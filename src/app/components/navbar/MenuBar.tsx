"use client";
import { useState } from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './menuBar.css';

export default function MenuBar() {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <Navbar expand="md" className="navbar">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              src="/images/digitech.png"
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
                <Nav.Link
                  href="/"
                  className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('home')}
                >
                  home
                </Nav.Link>
                <Nav.Link
                  href="#action3"
                  className={`nav-link ${activeLink === 'sobre' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('sobre')}
                >
                  sobre nós
                </Nav.Link>
                <Nav.Link
                  href="#action2"
                  className={`nav-link ${activeLink === 'servico' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('servico')}
                >
                  serviços
                </Nav.Link>
                <Nav.Link
                  href="#action5"
                  className={`nav-link ${activeLink === 'clientes' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('clientes')}
                >
                  Clientes
                </Nav.Link>
                <Nav.Link
                  href="#action4"
                  className={`nav-link ${activeLink === 'equipa' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('equipa')}
                >
                  equipa
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}


