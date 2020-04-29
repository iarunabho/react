import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
      { name: "Max", age: "28" },
      { name: "Manu", age: "29" },
      { name: "Stephanie", age: "26" },
    ],
    otherState: "Some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log("Was Clicked");
    this.setState({
      person: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };
  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className='App'>
        <h1>Hi, I'm a React Developer.</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Does this work now?")
    // );
  }
}
export default App;

{
  /* <div>
<Person
  name={this.state.person[0].name}
  age={this.state.person[0].age}
/>
<Person
  name={this.state.person[1].name}
  age={this.state.person[1].age}
  click={this.switchNameHandler.bind(this, "Max!")}
  changed={this.nameChangeHandler}
>My Hobbies: Racing
</Person>
<Person
  name={this.state.person[2].name}
  age={this.state.person[2].age}
/>
</div> */
}
