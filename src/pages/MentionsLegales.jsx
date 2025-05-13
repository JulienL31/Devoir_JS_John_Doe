import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';

function MentionsLegales() {
  return (
    <Container className="py-5">

      {/* Titre */}
      
      <div className="text-center mb-5">
        <h2 className="fw-bold">Mentions légales</h2>
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

      {/* Accordéon */}

      <Accordion defaultActiveKey="0" flush>

        {/* Éditeur du site */}

        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            <p className="fw-bold">John Doe</p>
            <p className="mb-1"><FaMapMarkerAlt className="me-2" />40 rue Laure Diebold</p>
            <p className="mb-1"><FaMapMarkerAlt className="me-2" />69009 Lyon, France</p>
            <p className="mb-1"><FaPhoneAlt className="me-2" />10 20 30 40 50</p>
            <p className="mb-0"><FaEnvelope className="me-2" />john.doe@gmail.com</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Hébergeur */}

        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <p className="fw-bold">alwaysdata</p>
            <p className="mb-1">91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
            <p className="mb-0">
              <FaGlobe className="me-2" />
              <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                www.alwaysdata.com
              </a>
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Crédits */}

        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <h5 className="fw-bold">Crédits</h5>
            <p>
              Ce site a été réalisé par John Doe, étudiant au{' '}
              <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">
                Centre Européen de formation
              </a>.
            </p>
            <p>
              <em>
                Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{' '}
                <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>
              </em>
            </p>
            <p>
              <em>
                Le favicon de ce site a été fournie par{' '}
                <a
                  href="https://www.flaticon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  John doe Icons erstellt von Freepik - Flaticon
                </a>
              </em>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default MentionsLegales;
