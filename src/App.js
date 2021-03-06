import React, { useState, useEffect } from 'react';
import './App.css';
import { GuestList } from './components/GuestList/';
import { GuestForm } from './components/GuestForm/';
import { getUsers, addUser } from './api/api';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const loadedUsers = await getUsers();

    setUsers(loadedUsers);
  };


  const handleUser = async (user) => {
    await addUser(user)
    loadUsers();
  };

  return (
    <div className="App">
      <GuestList users={users} />
      <GuestForm handleUser={handleUser} />
    </div>
  );
}

export default App;
