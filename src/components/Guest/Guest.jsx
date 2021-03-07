import React from 'react';
import './Guest.scss';
import PropTypes from 'prop-types';

export const Guest = ({ user }) => (
  <div className="guest">
    <span
      style={{ color: `${user.nameColor}` }}
      className="guest__name"
    >
      {user.name}
    </span>
    <div className="guest__message">
      <p
        style={{ color: `${user.textColor}` }}
        className="guest__text"
      >
        {user.text}
      </p>
      <div className="guest__date">
        <span>{user.date}</span>
        <span>{user.time}</span>
      </div>
    </div>
  </div>
);

Guest.propTypes = {
  user: PropTypes.shape({
    nameColor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};
