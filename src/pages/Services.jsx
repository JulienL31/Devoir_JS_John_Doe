import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPaintBrush, FaCode, FaSearch } from 'react-icons/fa';
import bannerImg from '../assets/images/banner.jpg';


function Services() {
  return (

    <>
      {/* Bannière */}

      <div className="w-100">
        <img
          src={bannerImg}
          alt="Bannière"
          className="img-fluid w-100"
          style={{ objectFit: 'cover', maxHeight: '300px' }}
        />
      </div>


      {/* Titre */}

      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Mon offre de services</h2>
          <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir</p>
          <div
            style={{
              height: '4px',
              width: '200px',
              backgroundColor: '#0d6efd',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          ></div>
        </div>


        {/* Cartes */}

        <Row className="g-4 justify-content-center">
          <Col md={4}>
            <Card className="text-center h-100 border rounded shadow-sm p-4">
              <FaPaintBrush size={40} className="mb-3 text-primary mx-auto" />
              <Card.Title className="fw-bold">UX Design</Card.Title>
              <Card.Text>
                L’UX Design est une discipline qui consiste à concevoir des produits (sites web, applications
                mobiles, logiciels, objets connectés, etc.) en plaçant l’utilisateur au centre des préoccupations.
                L’objectif est de rendre l’expérience utilisateur la plus fluide et agréable possible.
              </Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center h-100 border rounded shadow-sm p-4">
              <FaCode size={40} className="mb-3 text-primary mx-auto" />
              <Card.Title className="fw-bold">Développement web</Card.Title>
              <Card.Text>
                Le développement de sites web consiste à créer des sites internet en utilisant des langages de
                programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
              </Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center h-100 border rounded shadow-sm p-4">
              <FaSearch size={40} className="mb-3 text-primary mx-auto" />
              <Card.Title className="fw-bold">Référencement</Card.Title>
              <Card.Text>
                Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire
                remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L’objectif est
                d’attirer un maximum de visiteurs qualifiés sur le site.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;