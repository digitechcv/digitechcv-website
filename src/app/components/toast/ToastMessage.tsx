import Toast from 'react-bootstrap/Toast';
import Image from 'next/image';

const ToastMessage = () => {
  return (
    <Toast>
      <Toast.Header>
        <Image src="/images/digitech.png" className="rounded me-2" alt="" />
        <strong className="me-auto">Sucesso</strong>
      </Toast.Header>
      <Toast.Body>Sua informação foi submetida. Por favor, aguarde o nosso contacto!</Toast.Body>
    </Toast>
  )
}

export default ToastMessage
