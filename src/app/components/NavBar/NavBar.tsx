"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./navBar.css";
import { useScrollDirection } from '../hooks/useScrollDirection';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('');
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
  const sections = ['home', 'sobre', 'servicos', 'clientes'];
  const threshold = window.innerHeight / 2; // metade da viewport

  for (let id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= threshold && rect.bottom >= threshold) {
        setActiveLink(id);
        break;
      }
    }
  }
};


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      className={`main-navbar ${scrollDirection === 'down' ? 'hide' : 'show'}`}
      expand="md"
      fixed="top"
    >
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
            <Nav className="justify-content-center flex-grow-1 pe-3 nav-links">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active' : ''}>home</Nav.Link>
              <Nav.Link href="#sobre" className={activeLink === 'sobre' ? 'active' : ''}>sobre nós</Nav.Link>
              <Nav.Link href="#servicos" className={activeLink === 'servicos' ? 'active' : ''}>serviço</Nav.Link>
              <Nav.Link href="#clientes" className={activeLink === 'clientes' ? 'active' : ''}>clientes</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
