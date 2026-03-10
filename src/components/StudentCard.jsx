// src/components/StudentCard.jsx
import React from 'react';

// Destructuring props directly in the parameters
const StudentCard = ({ student, houseColor }) => {
  const cardStyle = {
    borderLeft: `10px solid ${houseColor}`,
    margin: '1rem',
    padding: '1rem',
    backgroundColor: '#fefae0',
    color: '#283618',
    borderRadius: '8px',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  };

  return (
    <div className="card" style={cardStyle}>
      <h3>{student.name}</h3>
      <p><strong>House:</strong> {student.house}</p>
      <p><strong>Role:</strong> {student.role}</p>
      <p><em>Wand: {student.wand}</em></p>
    </div>
  );
};

export default StudentCard;