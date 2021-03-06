import React from 'react';
import './GuestList.scss';
import { Guest } from '../Guest';

export const GuestList = ({ users }) => {
  return (
    <div className="list">
      <h2>Guest list</h2>
      {users.map(user => (
        <Guest
          key={user.id}
          user={user}
       />
      ))}
    </div>
  );
};