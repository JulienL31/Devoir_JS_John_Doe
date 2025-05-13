import React, { useEffect, useState } from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import {
  FaUser,
  FaMapMarkerAlt,
  FaBook,
  FaUsers,
  FaUserFriends,
  FaInfoCircle
} from 'react-icons/fa';

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
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title className="fw-bold">Mon profil GitHub</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-white">
        {loading ? (
          <div className="text-center p-5">
            <Spinner animation="border" variant="light" />
          </div>
        ) : (
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="text-center mb-3 mb-md-0 me-md-4">
              <img
                src={data.avatar_url}
                alt={data.login}
                className="rounded"
                width="200"
                height="200"
              />
            </div>

            <div>
              <p>
                <FaUser className="me-2" />
                <a href={data.html_url} target="_blank" rel="noreferrer" className="text-white text-decoration-underline">
                  {data.name || data.login}
                </a>
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" />
                {data.location || 'Non spécifiée'}
              </p>
              <p>
                <FaInfoCircle className="me-2" />
                {data.bio || 'Aucune bio'}
              </p>
              <p>
                <FaBook className="me-2" />
                Repositories : {data.public_repos}
              </p>
              <p>
                <FaUsers className="me-2" />
                Followers : {data.followers}
              </p>
              <p>
                <FaUserFriends className="me-2" />
                Following : {data.following}
              </p>
            </div>
          </div>
        )}
      </Modal.Body>

      <Modal.Footer className="bg-dark">
        <button className="btn btn-light" onClick={handleClose}>
          Fermer
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalGithub;
