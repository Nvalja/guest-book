import React, { useState, useEffect } from 'react';
import './App.css';
import { GuestList } from './components/GuestList/';
import { GuestForm } from './components/GuestForm/';
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log(data);
  }

  const handleUser = (user) => {
    setUsers([
      ...users,
      user
    ])
  }

  return (
    <div className="App">
      <GuestList users={users} />
      <GuestForm handleUser={handleUser} />
    </div>
  );
}

export default App;
