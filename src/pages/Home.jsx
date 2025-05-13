import React, { useState } from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import ModalGithub from '../components/ModalGithub';
import heroImg from '../assets/images/hero-bg.jpg';
import johnImg from '../assets/images/john-doe-about.jpg';
import '../index.css';

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>

      {/* IMAGE Section */}
      <div className="hero-section position-relative">
        <div className="hero-overlay" />
        <div className="hero-content text-center text-white position-absolute top-50 start-50 translate-middle">
          <h1 className="display-3 fw-bold">Bonjour, je suis John Doe</h1>
          <h2 className="fw-semibold">Développeur web full stack</h2>

          <button className="btn btn-danger mt-5" onClick={() => setShowModal(true)}> En savoir plus </button>
          <ModalGithub show={showModal} handleClose={() => setShowModal(false)} />

        </div>
      </div>


      {/* Présentation Section */}

      <Container className="py-5">
        <div className="p-4 bg-light rounded shadow text-dark">
          <Row className="align-items-center">
            {/* Colonne image + texte */}
            <Col md={4} className="text-center text-md-start">
              <img src={johnImg} alt="John Doe" className="img-fluid rounded mb-3" />
              <h4>À propos de moi</h4>
              <p>
                Je suis un développeur web passionné par la création de sites modernes et performants.
                En formation au CEF, je cherche une alternance pour mettre mes compétences en pratique.
              </p>
            </Col>


            {/* Colonne compétences réduite */}

            <Col md={8} className="d-flex justify-content-center">
              <div style={{ maxWidth: '650px', width: '100%' }}>
                <h4 className="mb-4">Mes compétences</h4>
                <p>HTML / CSS</p>
                <ProgressBar now={90} label="90%" className="mb-3" variant="primary" />
                <p>JavaScript</p>
                <ProgressBar now={80} label="80%" className="mb-3" variant="success" />
                <p>React</p>
                <ProgressBar now={75} label="75%" className="mb-3" variant="info" />
                <p>Bootstrap</p>
                <ProgressBar now={85} label="85%" className="mb-3" variant="warning" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Modale GitHub */}

      <ModalGithub show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default Home;
