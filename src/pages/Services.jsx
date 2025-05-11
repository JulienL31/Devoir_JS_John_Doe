import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import service1 from '../assets/images/bleu.png';
import service2 from '../assets/images/code.png';
import service3 from '../assets/images/zoom.png';

function Services() {
  const services = [
    {
      title: 'Création de sites web',
      img: service1,
      desc: 'Des sites modernes, performants, adaptés à tous les écrans.'
    },
    {
      title: 'Développement front-end',
      img: service2,
      desc: 'Maîtrise des technologies HTML, CSS, JavaScript, React et Bootstrap.'
    },
    {
      title: 'Optimisation SEO',
      img: service3,
      desc: 'Amélioration du référencement pour une meilleure visibilité.'
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Mes Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0 service-card">
              <Card.Img variant="top" src={service.img} alt={service.title} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
