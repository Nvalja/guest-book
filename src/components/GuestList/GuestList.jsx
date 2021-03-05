import React from 'react';
import './GuestList.scss';

export const GuestList = ({ users }) => {

  return (
    <div className="list">
      <h2>Guest list</h2>
      {users.map(user => (
        <div key={Math.random()}>
          <span>{user.name}</span>
          <p>{user.text}</p>
        </div>
      ))}
    </div>
  );
};