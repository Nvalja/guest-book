import React, { useState, useEffect } from 'react';
import './App.scss';
import { GuestList } from './components/GuestList';
import { GuestForm } from './components/GuestForm';
import { Header } from './components/Header';

import { getUsers, addUser, getAllUsers } from './api/api';

function App() {
  const [users, setUsers] = useState([]);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async() => {
    try {
      const loadedUsers = await getUsers();

      setLoadError(false);
      setUsers(loadedUsers);
    } catch (error) {
      setLoadError(true);
    }
  };

  const handleUser = async(user) => {
    await addUser(user);
    loadUsers();
  };

  const handleView = async({ target }) => {
    try {
      const loadedUsers = target.name === 'last'
        ? await getUsers()
        : await getAllUsers();

      setLoadError(false);
      setUsers(loadedUsers);
    } catch (error) {
      setLoadError(true);
    }
  };

  return (
    <div className="app">
      <Header />
      {loadError ? (
        <span>Sorry, we have problem</span>
      ) : (
        <main className="app__main">
          <GuestList users={users} handleView={handleView} />
          <GuestForm handleUser={handleUser} />
        </main>
      )}
    </div>
  );
}

export default App;
