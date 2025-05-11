import React, { useEffect, useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';

function ModalGithub({ show, handleClose }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (show && !data) {
      fetch('https://api.github.com/users/github-john-doe')
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setLoading(false);
        });
    }
  }, [show, data]);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Profil GitHub</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : data ? (
          <div className="text-center">
            <img
              src={data.avatar_url}
              alt={data.login}
              width="100"
              className="rounded-circle mb-3"
            />
            <h5>{data.name || data.login}</h5>
            <p>{data.bio}</p>
            <a href={data.html_url} target="_blank" rel="noopener noreferrer">
              Voir le profil GitHub
            </a>
          </div>
        ) : (
          <p>Impossible de charger les données.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalGithub;
