import { useState } from 'react';
import { Header } from './components/Header';
import UserCard from './components/UserCard';
import './App.css';

const App = () => {
  // State-driven data for a "Live" feel
  const [crew] = useState([
    { id: 1, name: "Cmdr. Starlight", role: "Pilot", email: "ace@galaxy.io", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aria" },
    { id: 2, name: "Dr. Nebula", role: "Science Officer", email: "nova@void.io", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nova" },
    { id: 3, name: "Orion", role: "Engineer", email: "beams@core.io", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Orion" }
  ]);

  return (
    <main className="dashboard-container">
      <Header missionName="VOYAGER-III" status="NOMINAL" />
      
      <div className="card-grid">
        {crew.map(member => (
          <UserCard key={member.id} user={member} />
        ))}
      </div>
      
      <p className="read-the-docs">Quantum Encryption Active</p>
    </main>
  );
};

export default App;