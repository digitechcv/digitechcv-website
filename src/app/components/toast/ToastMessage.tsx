import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type ToastMessageProps = {
  message: string;
};

const ToastMessage: React.FC<ToastMessageProps> = ({ message }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast onClose={() => setShow(false)} show={show} bg="success">
        <Toast.Header closeButton>
          <Image src="/images/digitech.png" className="rounded me-2" alt="logo" width={20} height={20} />
          <strong className="me-auto">Sucesso</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastMessage;
