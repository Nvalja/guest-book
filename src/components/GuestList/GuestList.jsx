import React from 'react';
import './GuestList.scss';

export const GuestList = ({ users }) => {

  return (
    <div className="list">
      <h2>Guest list</h2>
      {users.map(user => (
        <div key={Math.random()}>
          <span style={{color: user.nameColor}}>{user.name}</span>
          <p style={{color: user.textColor}}>{user.text}</p>
        </div>
      ))}
    </div>
  );
};