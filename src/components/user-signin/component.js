import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import Cookies from 'js-cookie';

// components
import Button from 'components/button';
import Modal from 'components/modal';
import Icon from 'components/icon';
import Login from 'components/user-signin/login';
import Register from 'components/user-signin/register';

import { breakpoints } from 'utils/breakpoints';

import './styles.scss';

const SigInSigupContainer = ({ user, resetUser, modalContent }) => {
  const [isOpen, toggleModal] = useState(false);
  const [content, setContent] = useState(modalContent);

  const handleClick = () => {
    toggleModal(!isOpen);
  };

  const handleLogout = () => {
    Cookies.remove('user');
    resetUser();
  };

  return (
    <div className="c-login">
      {content === 'sign-in' && user.name && (
        <div className="dropdown">
          <MediaQuery minWidth={breakpoints.sm}>{user.name}</MediaQuery>

          <MediaQuery maxWidth={breakpoints.sm}>
            <Icon name="user-o" className="-big" style={{ fill: '#BFD630' }} />
          </MediaQuery>

          <div className="dropdown-content">
            <div>{user.name}</div>
            <button aria-label="log-out" onClick={handleLogout}>
              log out
            </button>
          </div>
        </div>
      )}
      {content === 'sign-in' && !user.name && (
        <Button aria-label="log-in" onClick={handleClick} className="-background -primary">
          Login
        </Button>
      )}

      {content === 'sign-up' && (
        <Button aria-label="join-us" onClick={handleClick} className="-background -primary">
          Join us
        </Button>
      )}

      <Modal isOpen={isOpen} onRequestClose={() => toggleModal(false)}>
        {content === 'sign-in' ? (
          <Login handleContent={() => setContent('sig-up')} toggleModal={toggleModal} />
        ) : (
          <Register toggleModal={toggleModal} />
        )}
      </Modal>
    </div>
  );
};

SigInSigupContainer.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  resetUser: PropTypes.func.isRequired,
  modalContent: PropTypes.string.isRequired,
  router: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
  }),
};

SigInSigupContainer.defaultProps = {
  router: PropTypes.shape({
    id: null,
    email: null,
  }),
};

export default SigInSigupContainer;