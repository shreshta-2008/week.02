import { useState } from 'react'
import { students, houseColors } from './data/students'
import StudentCard from './components/StudentCard'
import './App.css'

function App() {
  const [filter, setFilter] = useState('All');

  const filteredStudents = filter === 'All' 
    ? students 
    : students.filter(s => s.house === filter);

  return (
    <div id="root">
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'var(--gold)' }}>Hogwarts Student Directory</h1>
        <div className="filter-buttons" style={{ display: 'flex', gap: '10px' }}>
          {['All', 'Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'].map(house => (
            <button key={house} onClick={() => setFilter(house)}>
              {house}
            </button>
          ))}
        </div>
      </header>

      <main className="student-list">
        {filteredStudents.map((student) => (
          <StudentCard 
            key={student.id} 
            student={student} 
            houseColor={houseColors[student.house]} 
          />
        ))}
      </main>
    </div>
  );
}

export default App;