import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    person: [
      {name: 'Jo', age: 25},
      {name: 'Ex', age: 24},
      {name: 'Tee Tee', age: 10}
    ],
    otherState: 'some other value'
  }
  switchNameHandle = (newName) => {
    // console.log('Clicked!!!')
    //Don't do this this.state.person[0].name = 'Tanawat'
    this.setState({person: [{
      name: newName, age: 25},
      {name: 'Sirawich', age: 24},
      {name: 'Teerapat', age: 10
    }
    ]
  })
  }
  nameChangedHandle = (event) => {
    this.setState({person: [{
      name: 'Tanawat', age: 25},
      {name: event.target.value, age: 24},
      {name: 'Teerapat', age: 10
    }
    ]
  })
  }
render() {
  return (
    <div className="App">
      <h1>Hello</h1>
     <p>test JSX</p>
     <button onClick={() => this.switchNameHandle('Dukdui')}>Switch Name</button>
     <Person 
     name={this.state.person[0].name} 
     age={this.state.person[0].age} />
     <Person 
     name={this.state.person[1].name} 
     age={this.state.person[1].age}
     click={() => this.switchNameHandle('Kooooo')}
     changed={this.nameChangedHandle}
     >My hobby is badminton</Person>
     <Person 
     name={this.state.person[2].name} 
     age={this.state.person[2].age}></Person>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Work now?'))
}
}
export default App;