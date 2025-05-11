import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function MentionsLegales() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Container className="py-5">
        <h2 className="text-center mb-5">Mentions légales</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              John Doe<br />
              123 Rue Exemple<br />
              75000 Paris, France<br />
              Email : john.doe@example.com
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur du site</Accordion.Header>
            <Accordion.Body>
              OVH<br />
              2 rue Kellermann<br />
              59100 Roubaix, France<br />
              Site : https://www.ovh.com
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              Images : <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer">Pixabay</a><br />
              Icônes : <a href="https://www.flaticon.com/free-icons/john-doe" target="_blank" rel="noopener noreferrer">Flaticon</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default MentionsLegales;
