import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import proj1 from '../assets/images/portfolio/espace-bien-etre.jpg';
import proj2 from '../assets/images/portfolio/fresh-food.jpg';
import proj3 from '../assets/images/portfolio/restaurant-japonais.jpg';
import proj4 from '../assets/images/portfolio/coder.jpg';
import proj5 from '../assets/images/portfolio/screens.jpg';
import proj6 from '../assets/images/portfolio/seo.jpg';

function Portfolio() {
  const projects = [
    { title: 'Projet Portfolio', img: proj1, desc: 'Un site portfolio responsive pour un développeur web.' },
    { title: 'Application React', img: proj2, desc: 'Application web dynamique avec React.js et API externe.' },
    { title: 'Landing Page', img: proj3, desc: 'Page datterrissage moderne avec animations CSS.' },
    { title: 'E-commerce', img: proj4, desc: 'Boutique en ligne avec panier et paiement Stripe.' },
    { title: 'Dashboard Admin', img: proj5, desc: 'Interface dadministration avec Bootstrap et graphiques.' },
    { title: 'Blog Personnel', img: proj6, desc: 'Blog statique construit avec React et Markdown.' },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Mes Réalisations</h2>
      <Row>
        {projects.map((proj, idx) => (
          <Col md={4} className="mb-4" key={idx}>
            <Card className="h-100 shadow-sm border-0 project-card" >
              <Card.Img variant="top" src={proj.img} alt={proj.title} />
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.desc}</Card.Text>
                <Button variant="primary">Voir plus</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;