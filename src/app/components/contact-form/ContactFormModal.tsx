'use client';

import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import ContactForm from './contactForm';

const ContactFormModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const showListener = () => handleShow();
    window.addEventListener('showContactForm', showListener);

    return () => {
      window.removeEventListener('showContactForm', showListener);
    };
  }, []);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      contentClassName="custom-contact-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title >Contacte-nos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm />
      </Modal.Body>
    </Modal>
  );
};

export default ContactFormModal;
