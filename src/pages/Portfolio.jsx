import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import bannerImg from '../assets/images/banner.jpg';
import proj1 from '../assets/images/portfolio/fresh-food.jpg';
import proj2 from '../assets/images/portfolio/restaurant-japonais.jpg';
import proj3 from '../assets/images/portfolio/espace-bien-etre.jpg';
import proj4 from '../assets/images/portfolio/seo.jpg';
import proj5 from '../assets/images/portfolio/coder.jpg';
import proj6 from '../assets/images/portfolio/screens.jpg';

function Portfolio() {
  const projects = [
    {
      title: 'Fresh Food',
      img: proj1,
      desc: 'Site de vente de produits frais en ligne',
      tech: 'Site réalisé avec PHP et MySQL',
    },
    {
      title: 'Restaurant Akira',
      img: proj2,
      desc: 'Site de vente de produits frais en ligne',
      tech: 'Site réalisé avec WordPress',
    },
    {
      title: 'Espace bien-être',
      img: proj3,
      desc: 'Site de vente de produits frais en ligne',
      tech: 'Site réalisé avec LARAVEL',
    },
    {
      title: 'SEO',
      img: proj4,
      desc: 'Amélioration du référencement d’un site e-commerce',
      tech: 'Utilisation des outils SEO',
    },
    {
      title: "Création d'une API",
      img: proj5,
      desc: 'Création d’une API RESTFULL publique',
      tech: 'PHP - SYMFONY',
    },
    {
      title: "Maquette d'un site web",
      img: proj6,
      desc: 'Création du prototype d’un site',
      tech: 'Réalisé avec FIGMA',
    },
  ];

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

      {/* Contenu */}

      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Portfolio</h2>
          <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
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

        <Row>
          {projects.map((proj, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card className="h-100 text-center shadow-sm">
                <Card.Img variant="top" src={proj.img} alt={proj.title} />
                <Card.Body>
                  <Card.Title className="fw-bold">{proj.title}</Card.Title>
                  <Card.Text>{proj.desc}</Card.Text>
                  <Button variant="primary" className="mb-2">Voir le site</Button>
                  <Card.Text className="text-muted small m-0">{proj.tech}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;