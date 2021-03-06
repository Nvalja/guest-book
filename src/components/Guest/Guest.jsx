import React from 'react';
import './Guest.scss';

export const Guest = ({ user }) => {
  console.log(user.text);
  return (
    <div className="guest">
      <span
        style={{color: user.nameColor}}
        className="guest__name"
      >
        {user.name}
      </span>
      <div className="guest__message">
        <p
          style={{color: user.textColor}}
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
}