
import React from 'react';
import UserCard from './UserCard';

const UserGrid = ({ users }) => {
  return (
    <div className="user-grid">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;
