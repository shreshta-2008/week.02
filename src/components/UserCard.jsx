import React from 'react';

// ES6 Destructuring for clean prop access
const UserCard = ({ user }) => {
  const { name, role, email, avatar } = user;

  return (
    <div className="glass-card">
      <div className="avatar-ring">
        <img src={avatar} alt={name} className="user-avatar" />
      </div>
      <h3 className="neon-text">{name}</h3>
      <span className="role-badge">{role}</span>
      <p className="email-text">{email}</p>
    </div>
  );
};

export default UserCard; // Default Export