import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Colonne 1 */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">John Doe</h5>
            <p className="mb-1">
              <a href="https://www.google.com/maps?q=40+rue+Laure+Diebold,+Lyon" className="text-white text-decoration-none" target="_blank" rel="noreferrer">
                40 rue Laure Diebold<br />69009 Lyon, France
              </a>
            </p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-3">
              <a href="mailto:john.doe@gmail.com" className="text-white text-decoration-none">
                john.doe@gmail.com
              </a>
            </p>
            <div>
              <a href="https://github.com/github-john-doe" className="me-3 text-white" target="_blank" rel="noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com" className="me-3 text-white" target="_blank" rel="noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white" target="_blank" rel="noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>

          {/* Colonne 2 */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Accueil</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/portfolio" className="text-white text-decoration-none">Portfolio</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Me contacter</a></li>
              <li><a href="/mentions-legales" className="text-white text-decoration-none">Mentions légales</a></li>
            </ul>
          </Col>

          {/* Colonne 3 */}
          <Col md={4}>
            <h5 className="fw-bold">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="/portfolio" className="text-white text-decoration-none">Fresh Food</a></li>
              <li><a href="/portfolio" className="text-white text-decoration-none">Restaurant Akira</a></li>
              <li><a href="/portfolio" className="text-white text-decoration-none">Espace bien-être</a></li>
              <li><a href="/portfolio" className="text-white text-decoration-none">SEO</a></li>
              <li><a href="/portfolio" className="text-white text-decoration-none">Création d'une API</a></li>
              <li><a href="/portfolio" className="text-white text-decoration-none">Maquette d'un site</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
