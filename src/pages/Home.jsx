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
      {/* Hero Section */}
      <div className="position-relative w-100" style={{ height: '100vh', overflow: 'hidden' }}>
        {/* Image de fond avec assombrissement */}
        <div
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5)',
            height: '100%',
            width: '100%',
          }}
        ></div>

        {/* Texte centré au-dessus de l’image */}
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-3 fw-bold">Bienvenue !</h1>
          <h2 className="mb-4">Je suis John DOE, développeur web</h2>
          <button className="btn btn-primary">En savoir plus</button>
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
              <div style={{ maxWidth: '500px', width: '100%' }}>
                <h4 className="mb-4">Mes compétences</h4>
                <p>HTML / CSS</p>
                <ProgressBar now={90} label="90%" className="mb-3" />
                <p>JavaScript</p>
                <ProgressBar now={80} label="80%" className="mb-3" />
                <p>React</p>
                <ProgressBar now={75} label="75%" className="mb-3" />
                <p>Bootstrap</p>
                <ProgressBar now={85} label="85%" className="mb-3" />
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
