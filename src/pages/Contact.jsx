import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaMap, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../index.css';

function Contact() {
  return (
    <Container className="py-5">

      {/* Titre principal */}
      
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact</h2>
        <p className="text-muted">
          Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.
        </p>
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


      {/* Formulaire + coordonnées */}

      <Card className="p-4 shadow tall-card">
  <Row className="h-100">
    {/* Formulaire */}
    <Col md={6} className="d-flex flex-column pe-md-4">
      <h4 className="fw-bold border-bottom pb-2 border-primary mb-4">Formulaire de contact</h4>
      <Form className="d-flex flex-column flex-grow-1">
        <Form.Group className="mb-3" controlId="nom">
          <Form.Control type="text" placeholder="Votre nom" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" placeholder="Votre adresse email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="telephone">
          <Form.Control type="text" placeholder="Votre numéro de téléphone" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sujet">
          <Form.Control type="text" placeholder="Sujet" />
        </Form.Group>



        {/* Zone message avec hauteur flexible */}

        <Form.Group className="mb-3 flex-grow-1 d-flex flex-column" controlId="message">
          <Form.Control
            as="textarea"
            placeholder="Votre message"
            className="h-100"
            style={{ resize: 'none' }}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">Envoyer</Button>
        </div>
      </Form>
    </Col>


    {/* Coordonnées + carte */}

    <Col md={6} className="ps-md-4 d-flex flex-column mt-4 mt-md-0">
      <h4 className="fw-bold border-bottom pb-2 border-primary mb-4">Mes coordonnées</h4>
      <p className="mb-1"><strong>John Doe</strong></p>
      <p className="mb-1"><FaMap className="me-2" />40 rue Laure Diebold</p>
      <p className="mb-1"><FaMap className="me-2" />69009 Lyon, France</p>
      <p className="mb-1"><FaPhoneAlt className="me-2" />10 20 30 40 50</p>
      <p className="mb-3"><FaEnvelope className="me-2" />john.doe@gmail.com</p>



      {/* Carte Google */}

      <div className="flex-grow-1 mt-auto">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.034248792618!2d4.7961833!3d45.7786407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c009508c82b9%3A0xb92eec7f57b7aa8a!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1715613600000!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '500px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Col>
  </Row>
</Card>

    </Container>
  );
}

export default Contact;
