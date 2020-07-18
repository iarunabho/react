import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "asafa1", name: "Max", age: 28 },
      { id: "bfdgr1", name: "Manu", age: 29 },
      { id: "dfhere1", name: "Stephanie", age: 26 },
    ],
    otherState: "Some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }
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
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("[App.js] componentDidUpdate");
  }

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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
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
  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] rendering..");
    let persons = null;
    // let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}
        />
      );

      // btnClass = classes.Red;
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

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Does this work now?")
    // );
  }
}
export default withClass(App, classes.App);

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
