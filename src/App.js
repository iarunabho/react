import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asafa1", name: "Max", age: "28" },
      { id: "bfdgr1", name: "Manu", age: "29" },
      { id: "dfhere1", name: "Stephanie", age: "26" },
    ],
    otherState: "Some other value",
    showPersons: false,
  };

  // switchNameHandler = (newName) => {
  //   // console.log("Was Clicked");
  //   this.setState({
  //     person: [
  //       { name: newName, age: 28 },
  //       { name: "Manu", age: 29 },
  //       { name: "Stephanie", age: 26 },
  //     ],
  //   });
  // };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return (p.id = id);
    });
    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((persons, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={persons.name}
                age={persons.age}
                key={persons.id}
                changed={(event) => this.nameChangeHandler(event, persons.id)}
              />
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      style.backgroundColor = "red";
    }
    //let classes = ["red", "bold"].join(" ");
    // const classes = [];
    // if (this.state.persons.length <= 3) {
    //   classes.push("red");
    // }
    // if (this.state.persons.length <= 1) {
    //   classes.push("bold");
    // }
    const classes = [];
    if (this.state.persons.length <= 3) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <div className='App'>
        <h1>Hi, I'm a React Developer.</h1>
        <p className={classes.join(" ")}>This is really working!</p>
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
