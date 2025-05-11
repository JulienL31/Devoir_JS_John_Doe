import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 w-100">
      <div className="px-4 px-md-5">
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3">
            <strong>John DOE</strong><br />
            123 rue Exemple, 75000 Paris<br />
            06 12 34 56 78<br />
            <div className="mt-2">
              <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer" className="me-2 text-white">
                <FaGithub />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="me-2 text-white">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedin />
              </a>
            </div>
          </Col>

          <Col md={4} className="mb-3">
            <h6>Navigation</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Accueil</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/portfolio" className="text-white">Portfolio</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/mentions-legales" className="text-white">Mentions légales</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Derniers projets</h6>
            <ul className="list-unstyled">
              <li><a href="/portfolio" className="text-white">Projet 1</a></li>
              <li><a href="/portfolio" className="text-white">Projet 2</a></li>
              <li><a href="/portfolio" className="text-white">Projet 3</a></li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
