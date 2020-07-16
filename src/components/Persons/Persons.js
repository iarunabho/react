import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  static getDeprivedStateFromProps(props, state) {
    console.log("[Person.js] getDeprivedStateFromProps");
    return state;
  }
  //   shouldComponentUpdate(nextProp, nextState) {
  //     console.log("[Person.js] shouldComponentUpdate");
  //     if (nextProp.persons !== this.props.person) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //     // return true;
  //   }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Person.js] getSnapshotBeforeUpdate");
    return { message: "snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Person.js] componentDidUpdate");
    console.log(snapshot);
  }
  render() {
    console.log("[Persons.js rendering..]");
    return this.props.persons.map((persons, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={persons.name}
          age={persons.age}
          key={persons.id}
          changed={(event) => this.props.changed(event, persons.id)}
        />
      );
    });
  }
}

export default Persons;
