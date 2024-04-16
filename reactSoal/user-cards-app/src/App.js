
import React from 'react';
import './App.css';
import UserGrid from './UserGrid';

const users = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St, City, Country'
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    address: '456 Elm St, Town, Country'
  }
];

function App() {
  return (
    <div className="app">
      <h1>User Cards</h1>
      <UserGrid users={users} />
    </div>
  );
}

export default App;
