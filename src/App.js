import React, { Component } from "react";
import classes from "./App.css";
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
    let persons = null;
    let btnClass = "";

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
      btnClass = classes.Red;
      // style.backgroundColor = "red";
    }
    //let classes = ["red", "bold"].join(" ");
    // const classes = [];
    // if (this.state.persons.length <= 3) {
    //   classes.push("red");
    // }
    // if (this.state.persons.length <= 1) {
    //   classes.push("bold");
    // }
    const assignedClass = [];
    if (this.state.persons.length <= 3) {
      assignedClass.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClass.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React Developer.</h1>
        <p className={assignedClass.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
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
