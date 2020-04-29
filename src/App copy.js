import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personState, setPersonState] = useState({
    person: [
      { name: "Max", age: "28" },
      { name: "Manu", age: "29" },
      { name: "Stephanie", age: "26" },
    ],
    otherState: "Some other value",
  });
  const switchNameHandler = () => {
    // console.log("Was Clicked");
    setPersonState({
      person: [
        { name: "Maximilian", age: "28" },
        { name: "Manu", age: "29" },
        { name: "Stephanie", age: "29" },
      ],
    });
  };
  return (
    <div className='App'>
      <h1>Hi, I'm a React Developer.</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.person[0].name}
        age={personState.person[0].age}
      />
      <Person name={personState.person[1].name} age={personState.person[1].age}>
        My Hobbies: Racing
      </Person>
      <Person
        name={personState.person[2].name}
        age={personState.person[2].age}
      />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Does this work now?")
  // );
};

export default app;
