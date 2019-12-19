import React from 'react';
import './App.css';
import Person from './Person/Person';
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
     <p>test JSX</p>
     <Person />
     <Person />
     <Person />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Work now?'))
}

export default App;
