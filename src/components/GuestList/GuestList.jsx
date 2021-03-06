import React from 'react';
import './GuestList.scss';
import { Guest } from '../Guest';

export const GuestList = ({ users }) => {
  return (
    <div className="list">
      {users.map(user => (
        <Guest
          key={user.id}
          user={user}
       />
      ))}
    </div>
  );
};