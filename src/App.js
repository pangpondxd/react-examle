import React, { useState, useEffect } from 'react';
import './App.css';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Tanawat', age:'25'},
      {name: 'Sirawich', age:'24'},
      {name: 'Teerapat', age:'10'}
    ],
    otherState: 'p'
  });
  const [isToggle, setToggle] = useState(false)
const [keepPerson, setKeepPerson] = useState([])

const switchNameHandle = () => {
  setKeepPerson(personsState)
  if(isToggle){
  setPersonsState({
    persons: [
      {name: 'Jo', age:'25'},
      {name: 'Ex', age:'24'},
      {name: 'Tee', age:'10'}
    ],
    otherState: 'switch1'
  });
}else{
  setPersonsState(keepPerson)
}
}
useEffect(() => {
  if(isToggle){
  setToggle(!isToggle)
  }else{
    setToggle(!isToggle)
  }
}, [keepPerson])

  return (
    <div className="App">
      <h1>Hello</h1>
     <p>test JSX</p>
     <button onClick={() => switchNameHandle()}>Switch Name</button>
     <div>
     {personsState.persons.map(m  => (
<h1>{m.name}</h1>
     ))}
    </div>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Work now?'))
}

export default App;
