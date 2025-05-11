import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-light mt-auto py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <strong>John DOE</strong><br />
            123 rue Exemple, 75000 Paris<br />
            06 12 34 56 78<br />
            <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer" className="me-2 text-dark">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="me-2 text-dark">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
              <FaLinkedin className="social-icon" />
            </a>
          </Col>
          <Col md={4} className="mb-3">
            <h6>Navigation</h6>
            <ul className="list-unstyled">
              <li><a href="/">Accueil</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/mentions-legales">Mentions légales</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6>Derniers projets</h6>
            <ul className="list-unstyled">
              <li><a href="/portfolio">Projet 1</a></li>
              <li><a href="/portfolio">Projet 2</a></li>
              <li><a href="/portfolio">Projet 3</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
