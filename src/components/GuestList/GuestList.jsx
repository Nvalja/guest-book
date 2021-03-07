import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './GuestList.scss';
import { Guest } from '../Guest';

export const GuestList = ({ users, handleView }) => {
  const [sort, setSort] = useState(true);
  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    setSortedUsers(users);
  }, [users]);

  const sortByTime = () => {
    if (!sort) {
      setSortedUsers(users);
    } else {
      setSortedUsers([...users].reverse());
    }
  };

  return (
    <div className="list">
      <div className="list__buttons">
        <input
          name="all"
          className="list__button"
          type="button"
          value="all"
          onClick={(event) => {
            handleView(event);
            setSort(true);
          }}
        />
        <input
          name="last"
          className="list__button"
          type="button"
          value="last"
          onClick={(event) => {
            handleView(event);
            setSort(true);
          }}
        />
        <input
          name="last"
          className="list__button"
          type="button"
          value={sort ? 'newest' : 'oldest'}
          onClick={() => {
            sortByTime();
            setSort(!sort);
          }}
        />
      </div>
      {sortedUsers.map(user => (
        <Guest
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
};

GuestList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  handleView: PropTypes.func.isRequired,
};
