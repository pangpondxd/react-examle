import React from 'react';
import './App.css';
import Person from './Person/Person';
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
     <p>test JSX</p>
     <Person name="Tanawat" age="25"></Person>
     <Person name="Sirawich" age="24">My hobby is badminton</Person>
     <Person name="Teerapat" age="10"></Person>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Work now?'))
}

export default App;
