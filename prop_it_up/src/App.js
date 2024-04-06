import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className='container'>
      <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Black" />
      <PersonCard lastName="Smith" firstName="John" age={88} hairColor="Brown" />
      <PersonCard lastName="Fillmore" firstName="Millard" age={35} hairColor="Black" />
      <PersonCard lastName="Smith" firstName="Maria" age={28} hairColor="Red" />
    </div>
  );
}

export default App;
