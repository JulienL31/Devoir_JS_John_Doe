import React, { useState } from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import ModalGithub from '../components/ModalGithub';
import heroImg from '../assets/images/hero-bg.jpg';
import johnImg from '../assets/images/john-doe-about.jpg';

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <div
        className="text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <div>
          <h1 className="display-3">Bienvenue !</h1>
          <h2 className="mb-4">Je suis John DOE, développeur web</h2>
          <Button variant="primary" onClick={() => setShowModal(true)}>En savoir plus</Button>
        </div>
      </div>

      {/* Présentation Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={4}>
            <img src={johnImg} alt="John Doe" className="img-fluid rounded" />
          </Col>
          <Col md={8}>
            <h3>À propos de moi</h3>
            <p>Je suis un développeur web passionné par la création de sites modernes et performants. En formation au CEF, je cherche une alternance pour mettre mes compétences en pratique.</p>
          </Col>
        </Row>
      </Container>

      {/* Compétences Section */}
      <Container className="pb-5">
        <h3 className="mb-4">Mes compétences</h3>
        <p>HTML / CSS</p>
        <ProgressBar now={90} label={`90%`} className="mb-3" />
        <p>JavaScript</p>
        <ProgressBar now={80} label={`80%`} className="mb-3" />
        <p>React</p>
        <ProgressBar now={75} label={`75%`} className="mb-3" />
        <p>Bootstrap</p>
        <ProgressBar now={85} label={`85%`} className="mb-3" />
      </Container>

      {/* Modale GitHub */}
      <ModalGithub show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default Home;