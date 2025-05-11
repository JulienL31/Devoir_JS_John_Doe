import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Contactez-moi</h2>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Votre nom" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Courriel</Form.Label>
              <Form.Control type="email" placeholder="Votre adresse mail" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control type="tel" placeholder="Votre numéro de téléphone" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Sujet</Form.Label>
              <Form.Control type="text" placeholder="Sujet de votre message" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Votre message" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h5>John Doe</h5>
          <p>123 Rue Exemple<br />75000 Paris, France</p>
          <p>Téléphone : 01 23 45 67 89</p>
          <p>Email : john.doe@example.com</p>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999479528995!2d2.292292615674761!3d48.85837307928733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fcdaf76816f%3A0x40b82c3688c9460!2sTour+Eiffel!5e0!3m2!1sfr!2sfr!4v1635601709874!5m2!1sfr!2sfr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;