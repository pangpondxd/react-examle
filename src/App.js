import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./assets/css/tailwind.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    person: [
      { name: "Jo", age: 25 },
      { name: "Ex", age: 24 },
      { name: "Tee Tee", age: 10 }
    ],
    otherState: "some other value",
    showPerson: false
  };
  switchNameHandle = newName => {
    // console.log('Clicked!!!')
    //Don't do this this.state.person[0].name = 'Tanawat'
    this.setState({
      person: [
        {
          name: newName,
          age: 25
        },
        { name: "Sirawich", age: 24 },
        { name: "Teerapat", age: 10 }
      ]
    });
  };
  nameChangedHandle = event => {
    this.setState({
      person: [
        {
          name: "Tanawat",
          age: 25
        },
        { name: event.target.value, age: 24 },
        { name: "Teerapat", age: 10 }
      ]
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({showPerson: !doesShow})

  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let person = null;
    if (this.state.showPerson){
        person = (
            <div>
            <Person
              name={this.state.person[0].name}
              age={this.state.person[0].age}
            />{" "}
            <Person
              name={this.state.person[1].name}
              age={this.state.person[1].age}
              click={() => this.switchNameHandle("Kooooo")}
              changed={this.nameChangedHandle}
            >
              My hobby is badminton{" "}
            </Person>{" "}
            <Person
              name={this.state.person[2].name}
              age={this.state.person[2].age}
            ></Person>{" "}
          </div>
        )
    }

    return (
      <div className="App">
        <h1 className="text-red-600"> Hello </h1>{" "}
        <p className="text-2xl text-red-700"> test JSX </p>{" "}
        <button style={style} onClick={this.togglePersonHandler}>
          Switch Name{" "}
        </button>{" "}
        {/* {
        this.state.showPerson === true ?  */}
         
         {/* : <h1>Hello It's false</h1>
         }{" "} */}
         {person}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Work now?'))
  }
}
export default App;
